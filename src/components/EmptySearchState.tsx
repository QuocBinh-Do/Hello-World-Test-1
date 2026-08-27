import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/momo';

export function EmptySearchState() {
  return (
    <View style={styles.wrap}>
      <View style={styles.illustration}>
        <Text style={styles.emoji}>🔍</Text>
        <Text style={styles.q}>?</Text>
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
    paddingBottom: 80,
  },
  illustration: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.pink50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  emoji: {
    fontSize: 40,
  },
  q: {
    position: 'absolute',
    right: 18,
    top: 18,
    fontSize: 18,
    fontWeight: '800',
    color: colors.pink500,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
});
