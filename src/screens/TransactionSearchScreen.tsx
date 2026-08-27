import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SearchHeader } from '../components/SearchHeader';
import { SuggestionChips } from '../components/SuggestionChips';
import { SearchHistoryList } from '../components/SearchHistoryList';
import { TransactionRow } from '../components/TransactionRow';
import { EmptySearchState } from '../components/EmptySearchState';
import {
  INITIAL_HISTORY,
  SUGGESTIONS,
  searchTransactions,
} from '../data/transactions';
import { colors, spacing } from '../theme/momo';

export function TransactionSearchScreen() {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [history, setHistory] = useState(INITIAL_HISTORY);

  const results = useMemo(
    () => (submitted ? searchTransactions(query) : []),
    [query, submitted]
  );

  const showIdle = !submitted;
  const showResults = submitted && results.length > 0;
  const showEmpty = submitted && results.length === 0;

  const applyQuery = (text: string) => {
    setQuery(text);
    setSubmitted(true);
    const trimmed = text.trim();
    if (trimmed && !history.includes(trimmed)) {
      setHistory((prev) => [trimmed, ...prev].slice(0, 10));
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <SearchHeader
          value={query}
          onChangeText={(t) => {
            setQuery(t);
            if (submitted) setSubmitted(false);
          }}
          onClear={() => {
            setQuery('');
            setSubmitted(false);
          }}
          onCancel={() => {
            setQuery('');
            setSubmitted(false);
          }}
          onSubmit={() => applyQuery(query)}
        />

        {showIdle ? (
          <View style={styles.flex}>
            <Text style={styles.section}>Gợi ý cho bạn</Text>
            <SuggestionChips
              items={SUGGESTIONS}
              onPress={(item) => applyQuery(item)}
            />
            <Text style={[styles.section, styles.sectionSpaced]}>
              Lịch sử tìm kiếm
            </Text>
            <SearchHistoryList
              items={history}
              onPress={(item) => applyQuery(item)}
              onRemove={(item) =>
                setHistory((prev) => prev.filter((h) => h !== item))
              }
            />
          </View>
        ) : null}

        {showResults ? (
          <View style={styles.flex}>
            <Text style={styles.resultCount}>
              Tìm thấy {results.length} giao dịch
            </Text>
            <FlatList
              data={results}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TransactionRow item={item} />}
              contentContainerStyle={styles.list}
            />
          </View>
        ) : null}

        {showEmpty ? <EmptySearchState /> : null}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  flex: {
    flex: 1,
  },
  section: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSecondary,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
  },
  sectionSpaced: {
    marginTop: spacing.md,
  },
  resultCount: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSecondary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.bg,
  },
  list: {
    backgroundColor: colors.surface,
    paddingBottom: spacing.xxl,
  },
});
