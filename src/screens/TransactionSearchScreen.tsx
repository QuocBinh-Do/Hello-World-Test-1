import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { EmptySearchState } from '../components/EmptySearchState';
import { SearchHeader } from '../components/SearchHeader';
import { SearchHistoryList } from '../components/SearchHistoryList';
import { SuggestionChips } from '../components/SuggestionChips';
import { TransactionRow } from '../components/TransactionRow';
import {
  INITIAL_HISTORY,
  SUGGESTIONS,
  filterTransactions,
} from '../data/transactions';
import { colors, spacing } from '../theme/tokens';

type Mode = 'idle' | 'results' | 'empty';

/**
 * Figma node 10132:53944 — Kết quả tính năng tìm kiếm
 * Screens: Gợi ý + lịch sử | Kết quả | Empty state
 */
export function TransactionSearchScreen() {
  const [query, setQuery] = useState('nạp');
  const [history, setHistory] = useState(INITIAL_HISTORY);
  const [mode, setMode] = useState<Mode>('idle');
  const [committedQuery, setCommittedQuery] = useState('');

  const results = useMemo(
    () => filterTransactions(committedQuery),
    [committedQuery],
  );

  const runSearch = (raw: string) => {
    const q = raw.trim();
    Keyboard.dismiss();
    if (!q) {
      setMode('idle');
      setCommittedQuery('');
      return;
    }
    setQuery(q);
    setCommittedQuery(q);
    setHistory((prev) => [q, ...prev.filter((h) => h !== q)].slice(0, 8));
    const found = filterTransactions(q);
    setMode(found.length > 0 ? 'results' : 'empty');
  };

  const onChangeText = (text: string) => {
    setQuery(text);
    if (mode !== 'idle') {
      setMode('idle');
      setCommittedQuery('');
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <SearchHeader
        value={query}
        onChangeText={onChangeText}
        onClear={() => {
          setQuery('');
          setMode('idle');
          setCommittedQuery('');
        }}
        onCancel={() => {
          setQuery('');
          setMode('idle');
          setCommittedQuery('');
        }}
        onSubmit={() => runSearch(query)}
      />
      <View style={styles.divider} />

      {mode === 'idle' ? (
        <View style={styles.body}>
          <SuggestionChips items={SUGGESTIONS} onSelect={runSearch} />
          <SearchHistoryList
            items={history}
            onSelect={runSearch}
            onRemove={(item) =>
              setHistory((prev) => prev.filter((h) => h !== item))
            }
          />
        </View>
      ) : null}

      {mode === 'results' ? (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <Text style={styles.resultCount}>
              Tìm thấy {results.length} giao dịch
            </Text>
          }
          renderItem={({ item }) => <TransactionRow item={item} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          keyboardShouldPersistTaps="handled"
        />
      ) : null}

      {mode === 'empty' ? <EmptySearchState /> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bgDefault,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
  },
  body: {
    flex: 1,
  },
  resultCount: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
    fontSize: 13,
    color: colors.textSecondary,
  },
  listContent: {
    paddingBottom: spacing.xxl,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
    marginLeft: 72,
  },
});
