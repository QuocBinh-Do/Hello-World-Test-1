import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../theme/tokens';

type Props = {
  items: string[];
  onSelect: (item: string) => void;
};

export function SuggestionChips({ items, onSelect }: Props) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Gợi ý cho bạn</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
        {items.map((item) => (
          <Pressable
            key={item}
            onPress={() => onSelect(item)}
            style={({ pressed }) => [styles.chip, pressed && styles.chipPressed]}
          >
            <Text style={styles.chipText}>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingTop: spacing.lg,
    gap: spacing.md,
  },
  title: {
    paddingHorizontal: spacing.lg,
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  row: {
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
  },
  chip: {
    backgroundColor: colors.bgChip,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
  },
  chipPressed: {
    backgroundColor: colors.pink100,
  },
  chipText: {
    fontSize: 13,
    color: colors.textPrimary,
  },
});
