import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme/tokens';

export function EmptySearchState() {
  return (
    <View style={styles.wrap}>
      <View style={styles.illustration}>
        <Text style={styles.magnifier}>⌕</Text>
        <Text style={styles.question}>?</Text>
      </View>
      <Text style={styles.title}>Không tìm thấy kết quả</Text>
      <Text style={styles.subtitle}>
        Vui lòng kiểm tra lại từ khóa hoặc bộ lọc của bạn.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xxl,
    gap: spacing.md,
  },
  illustration: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.pink50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  magnifier: {
    fontSize: 40,
    color: colors.pink400,
  },
  question: {
    position: 'absolute',
    right: 22,
    top: 18,
    fontSize: 18,
    fontWeight: '700',
    color: colors.pink600,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
});
