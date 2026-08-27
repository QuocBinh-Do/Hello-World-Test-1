import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme/tokens';

type Props = {
  items: string[];
  onSelect: (item: string) => void;
  onRemove: (item: string) => void;
};

export function SearchHistoryList({ items, onSelect, onRemove }: Props) {
  if (items.length === 0) return null;

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Lịch sử tìm kiếm</Text>
      {items.map((item) => (
        <Pressable
          key={item}
          onPress={() => onSelect(item)}
          style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
        >
          <Text style={styles.clock}>◷</Text>
          <Text style={styles.label} numberOfLines={1}>
            {item}
          </Text>
          <Pressable
            onPress={() => onRemove(item)}
            hitSlop={10}
            style={styles.removeHit}
          >
            <Text style={styles.remove}>×</Text>
          </Pressable>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingTop: spacing.xl,
  },
  title: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: spacing.md,
  },
  rowPressed: {
    backgroundColor: colors.bgSecondary,
  },
  clock: {
    fontSize: 16,
    color: colors.iconMuted,
    width: 20,
    textAlign: 'center',
  },
  label: {
    flex: 1,
    fontSize: 15,
    color: colors.textPrimary,
  },
  removeHit: {
    width: 28,
    alignItems: 'center',
  },
  remove: {
    fontSize: 20,
    color: colors.textTertiary,
  },
});
