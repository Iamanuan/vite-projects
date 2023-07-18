<script setup>
import { useCounterStore } from "../stores/counter";
const counter = useCounterStore();
const count = ref(100);
const inc = () => count.value++;
</script>
<template>
  <el-button>我是按钮</el-button>
  <div @click="counter.inc()">我是首页{{ counter.num }}</div>
  <bar />
  <bar />
  <bar />
  <el-button @click="inc">{{ count }}</el-button>
</template>
