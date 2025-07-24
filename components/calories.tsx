import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

export default function DoughnutChart({
  percentage = 70,
  label = 'GORDURA',
  value = '77g',
  size = 110,
  strokeWidth = 10,
  color = '#e74c3c',
  bgColor = '#e0e0e0',
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center', margin: 2}}>
      <Svg width={size} height={size}>
        {/* Círculo de fundo */}
        <Circle
          stroke={bgColor}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Círculo do progresso */}
        <Circle
          stroke={color}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>

      {/* Texto no meio */}
      <View style={{ position: 'absolute', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{value}</Text>
        <Text style={{ fontSize: 12, color: '#555' }}>{label}</Text>
      </View>
    </View>
  );
}
