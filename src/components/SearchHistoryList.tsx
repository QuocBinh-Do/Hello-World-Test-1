import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/momo';

type Props = {
  items: string[];
  onPress: (item: string) => void;
  onRemove: (item: string) => void;
};

export function SearchHistoryList({ items, onPress, onRemove }: Props) {
  return (
    <View>
      {items.map((item) => (
        <Pressable
          key={item}
          style={styles.row}
          onPress={() => onPress(item)}
        >
          <Text style={styles.clock}>🕐</Text>
          <Text style={styles.label} numberOfLines={1}>
            {item}
          </Text>
          <Pressable
            onPress={() => onRemove(item)}
            hitSlop={10}
            accessibilityLabel={`Xóa ${item}`}
          >
            <Text style={styles.remove}>×</Text>
          </Pressable>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.surface,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  clock: {
    fontSize: 16,
    marginRight: spacing.md,
  },
  label: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
  },
  remove: {
    fontSize: 22,
    color: colors.textTertiary,
    paddingHorizontal: spacing.xs,
  },
});
