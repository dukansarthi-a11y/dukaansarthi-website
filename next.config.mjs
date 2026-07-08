/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enabled static export to generate pure HTML/CSS/JS inside the 'out' directory.
  // This is perfect for uploading directly to Hostinger's public_html folder.
  output: 'export',
  images: {
    unoptimized: true, // Required for static export compatibility
  },
};

export default nextConfig;
