import React from 'react';
import {
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import { colors, radius, spacing } from '../theme/momo';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
  onCancel: () => void;
  onSubmit: () => void;
  placeholder?: string;
};

export function SearchHeader({
  value,
  onChangeText,
  onClear,
  onCancel,
  onSubmit,
  placeholder = 'Tìm giao dịch',
}: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.field}>
        <Text style={styles.leading}>🔍</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.textTertiary}
          returnKeyType="search"
          onSubmitEditing={onSubmit}
          autoFocus
          autoCorrect={false}
        />
        {value.length > 0 ? (
          <Pressable onPress={onClear} hitSlop={8} accessibilityLabel="Xóa">
            <View style={styles.clearBtn}>
              <Text style={styles.clearText}>×</Text>
            </View>
          </Pressable>
        ) : null}
      </View>
      <Pressable onPress={onCancel} hitSlop={8}>
        <Text style={styles.cancel}>Hủy</Text>
      </Pressable>
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
    gap: spacing.md,
  },
  field: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.searchBg,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    height: 40,
  },
  leading: {
    fontSize: 14,
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
    paddingVertical: 0,
  },
  clearBtn: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.textTertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearText: {
    color: colors.surface,
    fontSize: 14,
    lineHeight: 16,
    marginTop: -1,
  },
  cancel: {
    fontSize: 15,
    color: colors.pink500,
    fontWeight: '600',
  },
});
