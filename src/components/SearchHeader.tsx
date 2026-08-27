import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { colors, radius, spacing } from '../theme/tokens';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
  onCancel: () => void;
  onSubmit: () => void;
  placeholder?: string;
};

/** MoMo UI Kit: InputSearch + Top Navigation search pattern */
export function SearchHeader({
  value,
  onChangeText,
  onClear,
  onCancel,
  onSubmit,
  placeholder = 'Tìm kiếm giao dịch',
}: Props) {
  return (
    <View style={styles.row}>
      <Pressable onPress={onCancel} hitSlop={8} style={styles.backBtn}>
        <Text style={styles.backIcon}>‹</Text>
      </Pressable>
      <View style={styles.inputWrap}>
        <Text style={styles.searchIcon}>⌕</Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmit}
          placeholder={placeholder}
          placeholderTextColor={colors.textTertiary}
          returnKeyType="search"
          autoFocus
          style={styles.input}
        />
        {value.length > 0 ? (
          <Pressable onPress={onClear} hitSlop={8}>
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
    gap: spacing.sm,
    backgroundColor: colors.bgDefault,
  },
  backBtn: {
    width: 28,
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 32,
    lineHeight: 34,
    color: colors.textPrimary,
    marginTop: -4,
  },
  inputWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgSecondary,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    height: 40,
    gap: spacing.sm,
  },
  searchIcon: {
    fontSize: 16,
    color: colors.iconMuted,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: colors.textPrimary,
    paddingVertical: 0,
  },
  clearBtn: {
    width: 18,
    height: 18,
    borderRadius: radius.circle,
    backgroundColor: colors.textTertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearText: {
    color: colors.bgDefault,
    fontSize: 14,
    lineHeight: 16,
    marginTop: -1,
  },
  cancel: {
    fontSize: 15,
    color: colors.textPink,
    fontWeight: '600',
  },
});
