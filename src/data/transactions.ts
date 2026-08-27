export type Transaction = {
  id: string;
  title: string;
  subtitle: string;
  amount: number;
  timestamp: string;
  iconLabel: string;
  iconBg: string;
};

export const SUGGESTIONS = [
  'Chuyển tiền',
  'Nạp tiền',
  'Thanh toán',
  'Rút tiền',
  'Hoàn tiền',
];

export const INITIAL_HISTORY = [
  'Chuyển tiền',
  'Nạp tiền điện thoại',
  'Thanh toán hóa đơn',
];

export const TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    title: 'Nạp tiền điện thoại',
    subtitle: 'Thành công - 0908 123 456',
    amount: -50000,
    timestamp: '12/03/2024 - 15:30',
    iconLabel: '📱',
    iconBg: '#FFE8F3',
  },
  {
    id: '2',
    title: 'Nạp tiền vào ví từ MB Bank',
    subtitle: 'Thành công - **** 5678',
    amount: 200000,
    timestamp: '10/03/2024 - 09:15',
    iconLabel: 'MB',
    iconBg: '#E8F5E9',
  },
  {
    id: '3',
    title: 'Chuyển tiền đến Nguyễn Văn A',
    subtitle: 'Thành công - MoMo',
    amount: -150000,
    timestamp: '08/03/2024 - 18:42',
    iconLabel: '💸',
    iconBg: '#E3F2FD',
  },
  {
    id: '4',
    title: 'Thanh toán hóa đơn điện',
    subtitle: 'Thành công - EVN',
    amount: -320000,
    timestamp: '05/03/2024 - 11:05',
    iconLabel: '⚡',
    iconBg: '#FFF8E1',
  },
];

export function formatVnd(amount: number): string {
  const abs = Math.abs(amount).toLocaleString('vi-VN');
  return amount < 0 ? `-${abs}đ` : `+${abs}đ`;
}

export function filterTransactions(query: string): Transaction[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return TRANSACTIONS.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.subtitle.toLowerCase().includes(q),
  );
}
