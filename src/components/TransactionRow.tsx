import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { formatVnd, type Transaction } from '../data/transactions';
import { colors, radius, spacing } from '../theme/tokens';

type Props = {
  item: Transaction;
};

export function TransactionRow({ item }: Props) {
  const isCredit = item.amount > 0;

  return (
    <View style={styles.row}>
      <View style={[styles.avatar, { backgroundColor: item.iconBg }]}>
        <Text style={styles.avatarText}>{item.iconLabel}</Text>
      </View>
      <View style={styles.center}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {item.subtitle}
        </Text>
      </View>
      <View style={styles.right}>
        <Text style={[styles.amount, isCredit && styles.amountCredit]}>
          {formatVnd(item.amount)}
        </Text>
        <Text style={styles.time}>{item.timestamp}</Text>
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
    gap: spacing.md,
    backgroundColor: colors.bgDefault,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: radius.circle,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.pink700,
  },
  center: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  right: {
    alignItems: 'flex-end',
    gap: 2,
  },
  amount: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.amountDebit,
  },
  amountCredit: {
    color: colors.amountCredit,
  },
  time: {
    fontSize: 11,
    color: colors.textTertiary,
  },
});
