import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../../Styles';

const UserDataView = ({ userData }) => {
    const projects = userData?.projects_users || [];
    const achievements = userData?.achievements || [];
    const skills = userData?.cursus_users?.[1]?.skills || [];
    const [data, setData] = useState();
    const totalSkills = skills.reduce((total, skill) => total + skill.level, 0);
  
    if (!userData) {
        return (
            <View style={styles.content}>
                <Text style={styles.infoText}>No user data available.</Text>
            </View>
        );
    }

    return (
      <View style={{ flex: 1 }}> 
        <View style={styles.section}>
          <TouchableOpacity style={styles.buttonSmall} onPress={() => setData("projects")}>
            <Text style={styles.buttonText}>Projects</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSmall} onPress={() => setData("skills")}>
            <Text style={styles.buttonText}>Skills</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSmall} onPress={() => setData("achievements")}>
            <Text style={styles.buttonText}>Achievements</Text>
          </TouchableOpacity>
        </View>

        {/* Scrollable Section */}
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>
          {data === "projects" &&
            (projects.length > 0
              ? projects.map((project, index) => (
                  <Text key={index} style={styles.infoText}>
                    {project.project.name} - {project.status}{" "}
                    {project.final_mark !== null ? `- Mark: ${project.final_mark}` : ""}
                  </Text>
                ))
              : <Text style={styles.infoText}>No projects available.</Text>)}

          {data === "skills" &&
            (skills.length > 0
              ? skills.map((skill, index) => (
                  <Text key={index} style={styles.infoText}>
                    {skill.name} ({skill.level.toFixed(2)}) ({((skill.level / totalSkills) * 100).toFixed(2)}%)
                  </Text>
                ))
              : <Text style={styles.infoText}>No skills available.</Text>)}

          {data === "achievements" &&
            (achievements.length > 0
              ? achievements.map((a, index) => (
                  <Text key={index} style={styles.infoText}>{a.name}</Text>
                ))
              : <Text style={styles.infoText}>No achievements available.</Text>)}
        </ScrollView>
      </View>
    );
};

export default UserDataView;
