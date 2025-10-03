# Swifty - 42 School Companion App Makefile

# Variables
NODE_VERSION := 18.18.0
NVM_DIR := $(PWD)/.nvm
NODE_DIR := $(NVM_DIR)/versions/node/v$(NODE_VERSION)
NODE_BIN := $(NODE_DIR)/bin
NPM := $(NODE_BIN)/npm
NODE := $(NODE_BIN)/node
NPXCMD := $(NODE_BIN)/npx
EXPO := $(NPXCMD) expo
NODE_MODULES := node_modules
VENV_CREATED := .venv_created

# Colors for output
GREEN := \033[0;32m
YELLOW := \033[1;33m
RED := \033[0;31m
NC := \033[0m # No Color

.PHONY: help install setup start android ios web clean venv-create venv-clean check-venv

# Default target
all: setup start

# Help target
help:
	@echo "$(GREEN)Swifty - 42 School Companion App$(NC)"
	@echo "Available targets:"
	@echo "  $(YELLOW)venv-create$(NC)        - Create local Node.js virtual environment"
	@echo "  $(YELLOW)setup$(NC)              - Create venv and install all dependencies"
	@echo "  $(YELLOW)install$(NC)            - Install npm dependencies (requires venv)"
	@echo "  $(YELLOW)start$(NC)              - Start the Expo development server"
	@echo "  $(YELLOW)android$(NC)            - Run on Android device/emulator"
	@echo "  $(YELLOW)ios$(NC)                - Run on iOS device/simulator"
	@echo "  $(YELLOW)web$(NC)                - Run in web browser"
	@echo "  $(YELLOW)clean$(NC)              - Clean node_modules and reinstall"
	@echo "  $(YELLOW)venv-clean$(NC)         - Remove virtual environment"
	@echo "  $(YELLOW)check-venv$(NC)         - Check if virtual environment exists"
	@echo "  $(YELLOW)help$(NC)               - Show this help message"

# Create virtual Node.js environment
venv-create:
	@echo "$(YELLOW)Creating local Node.js virtual environment...$(NC)"
	@if [ ! -f "$(VENV_CREATED)" ]; then \
		mkdir -p $(NVM_DIR); \
		echo "$(YELLOW)Downloading Node.js v$(NODE_VERSION)...$(NC)"; \
		if command -v wget >/dev/null 2>&1; then \
			wget -q "https://nodejs.org/dist/v$(NODE_VERSION)/node-v$(NODE_VERSION)-linux-x64.tar.xz" -O /tmp/node.tar.xz; \
		elif command -v curl >/dev/null 2>&1; then \
			curl -sL "https://nodejs.org/dist/v$(NODE_VERSION)/node-v$(NODE_VERSION)-linux-x64.tar.xz" -o /tmp/node.tar.xz; \
		else \
			echo "$(RED)Error: Neither wget nor curl found. Cannot download Node.js$(NC)"; \
			exit 1; \
		fi; \
		echo "$(YELLOW)Extracting Node.js...$(NC)"; \
		cd $(NVM_DIR) && tar -xf /tmp/node.tar.xz; \
		mkdir -p versions/node; \
		mv node-v$(NODE_VERSION)-linux-x64 versions/node/v$(NODE_VERSION); \
		rm -f /tmp/node.tar.xz; \
		touch $(VENV_CREATED); \
		echo "$(GREEN)✓ Local Node.js environment created$(NC)"; \
	else \
		echo "$(GREEN)✓ Virtual environment already exists$(NC)"; \
	fi

# Check if virtual environment exists
check-venv:
	@if [ ! -f "$(VENV_CREATED)" ] || [ ! -f "$(NODE)" ]; then \
		echo "$(RED)Virtual environment not found. Run 'make venv-create' first.$(NC)"; \
		exit 1; \
	fi
	@echo "$(GREEN)✓ Virtual environment ready$(NC)"
	@$(NODE) --version

# Install dependencies
install: check-venv
	@echo "$(YELLOW)Installing npm dependencies...$(NC)"
	PATH="$(NODE_BIN):$$PATH" $(NPM) install
	@echo "$(GREEN)✓ Dependencies installed successfully$(NC)"

# Setup the project
setup: venv-create install
	@echo "$(YELLOW)Setting up Swifty project...$(NC)"
	@if [ ! -f .env ]; then \
		echo "$(YELLOW)Creating .env file...$(NC)"; \
		touch .env; \
		echo "$(GREEN)✓ .env file created$(NC)"; \
	fi
	@echo "$(GREEN)✓ Project setup complete!$(NC)"
	@echo "$(YELLOW)Note: Make sure to configure your 42 API credentials in src/utils/GetToken.js$(NC)"

# Start the development server
start: $(NODE_MODULES)
	@echo "$(YELLOW)Starting Expo development server...$(NC)"
	PATH="$(NODE_BIN):$$PATH" $(EXPO) start

# Run on Android
android: $(NODE_MODULES)
	@echo "$(YELLOW)Running on Android...$(NC)"
	PATH="$(NODE_BIN):$$PATH" $(EXPO) run:android

# Run on iOS
ios: $(NODE_MODULES)
	@echo "$(YELLOW)Running on iOS...$(NC)"
	PATH="$(NODE_BIN):$$PATH" $(EXPO) run:ios

# Run on web
web: $(NODE_MODULES)
	@echo "$(YELLOW)Running on web...$(NC)"
	PATH="$(NODE_BIN):$$PATH" $(EXPO) start --web

# Clean and reinstall
clean:
	@echo "$(YELLOW)Cleaning project...$(NC)"
	rm -rf $(NODE_MODULES)
	rm -f package-lock.json
	@echo "$(GREEN)✓ Project cleaned$(NC)"
	@$(MAKE) install

# Clean virtual environment
venv-clean:
	@echo "$(YELLOW)Removing virtual environment...$(NC)"
	rm -rf $(NVM_DIR)
	rm -f $(VENV_CREATED)
	@echo "$(GREEN)✓ Virtual environment removed$(NC)"

# Check if node_modules exists
$(NODE_MODULES): check-venv
	@if [ ! -d "$(NODE_MODULES)" ]; then \
		echo "$(YELLOW)Dependencies not found. Installing...$(NC)"; \
		$(MAKE) install; \
	fi

# Check all dependencies
check-deps: check-venv
	@if [ -d "$(NODE_MODULES)" ]; then \
		echo "$(GREEN)✓ All dependencies are installed$(NC)"; \
	else \
		echo "$(YELLOW)Dependencies not installed. Run 'make install'$(NC)"; \
	fi