import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import DoughnutChart from './calories'; // Gráfico individual

const { width } = Dimensions.get('window');

export default function WidgetSlider() {
  const pages = [
    { id: '1', type: 'calorias' },
    { id: '2', type: 'macros' },
  ];

  return (
    <FlatList
      data={pages}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View   style={{
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  }}>
          {item.type === 'calorias' ? (
            <DoughnutChart
              percentage={66}
              value="1564Kcal"
              label="CALORIAS"
              color="#3498db"
            />
          ) : (
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '100%', alignItems: 'center'}}>
              <DoughnutChart
                percentage={58}
                value="284g"
                label="CARBO"
                color="#f39c12"
              />
              <DoughnutChart
                percentage={80}
                value="134g"
                label="PROTEÍNA"
                color="#2ecc71"
              />
              <DoughnutChart
                percentage={65}
                value="77g"
                label="GORDURA"
                color="#e74c3c"
              />
            </View>
          )}
        </View>
      )}
    />
  );
}
