<template>
  <Space vertical>
    <Typography.Title :level="5">7 days range</Typography.Title>
    <RangePicker :disabled-date="disabled7DaysDate" />

    <Typography.Title :level="5">6 months range</Typography.Title>
    <RangePicker :disabled-date="disabled6MonthsDate" picker="month" />
  </Space>
</template>

<script setup lang="ts">
import { DatePicker, Space, Typography } from 'antd-v';

const RangePicker = DatePicker.RangePicker;

const getYearMonth = (date: any) => date.year() * 12 + date.month();

const disabled7DaysDate = (current: any, { from, type }: any) => {
  if (from) {
    const minDate = from.add(-6, 'days');
    const maxDate = from.add(6, 'days');

    switch (type) {
      case 'year':
        return current.year() < minDate.year() || current.year() > maxDate.year();

      case 'month':
        return (
          getYearMonth(current) < getYearMonth(minDate) ||
          getYearMonth(current) > getYearMonth(maxDate)
        );

      default:
        return Math.abs(current.diff(from, 'days')) >= 7;
    }
  }

  return false;
};

const disabled6MonthsDate = (current: any, { from, type }: any) => {
  if (from) {
    const minDate = from.add(-5, 'months');
    const maxDate = from.add(5, 'months');

    switch (type) {
      case 'year':
        return current.year() < minDate.year() || current.year() > maxDate.year();

      default:
        return (
          getYearMonth(current) < getYearMonth(minDate) ||
          getYearMonth(current) > getYearMonth(maxDate)
        );
    }
  }

  return false;
};
</script>
