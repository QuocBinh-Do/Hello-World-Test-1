import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../theme/momo';
import { Transaction, formatVnd } from '../data/transactions';

type Props = {
  item: Transaction;
};

export function TransactionRow({ item }: Props) {
  const isIn = item.amount > 0;
  return (
    <View style={styles.row}>
      <View style={[styles.icon, { backgroundColor: item.iconBg }]}>
        <Text style={styles.iconText}>{item.iconLabel}</Text>
      </View>
      <View style={styles.mid}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {item.subtitle}
        </Text>
      </View>
      <View style={styles.right}>
        <Text style={[styles.amount, isIn && styles.amountIn]}>
          {formatVnd(item.amount)}
        </Text>
        <Text style={styles.time}>{item.datetime}</Text>
      </View>
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
  icon: {
    width: 40,
    height: 40,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  iconText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.pink500,
  },
  mid: {
    flex: 1,
    marginRight: spacing.sm,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  right: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.amountOut,
    marginBottom: 2,
  },
  amountIn: {
    color: colors.amountIn,
  },
  time: {
    fontSize: 11,
    color: colors.textTertiary,
  },
});
