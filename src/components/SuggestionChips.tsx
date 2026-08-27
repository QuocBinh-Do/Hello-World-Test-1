import React from 'react';
import { Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { colors, radius, spacing } from '../theme/momo';

type Props = {
  items: string[];
  onPress: (item: string) => void;
};

export function SuggestionChips({ items, onPress }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
    >
      {items.map((item) => (
        <Pressable
          key={item}
          style={styles.chip}
          onPress={() => onPress(item)}
        >
          <Text style={styles.chipText}>{item}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
  },
  chip: {
    backgroundColor: colors.chipBg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipText: {
    fontSize: 13,
    color: colors.text,
    fontWeight: '500',
  },
});
