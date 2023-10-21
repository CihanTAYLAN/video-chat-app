<script setup lang="ts">
import io from "socket.io-client";
const socket = io("localhost:8081");

socket.on("connect", () => {
	socket.emit("video-chat", "Hello!", { mr: "john" }, Uint8Array.from([1, 2, 3, 4]));
});

socket.on("video-chat", (data) => {
	console.log(data);
});

</script>

<template>
	<div>HI</div>
</template>
