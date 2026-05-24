const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(
    `\n❌ Paket ini membutuhkan Node.js 20+ untuk berjalan dengan andal.\n` +
    `Anda menggunakan Node.js ${process.versions.node}.\n` +
    `Silakan tingkatkan ke Node.js 20+ untuk melanjutkan.\n`
  );
  process.exit(1);
}