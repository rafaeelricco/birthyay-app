export const formatSize = (size: number): string => {
   if (size < 1024) {
      return Math.round(size) + ' bytes'
   } else if (size < Math.pow(1024, 2)) {
      return Math.round(size / 1024) + 'KB'
   } else if (size < Math.pow(1024, 3)) {
      return Math.round(size / Math.pow(1024, 2)) + 'MB'
   } else {
      return Math.round(size / Math.pow(1024, 3)) + 'GB'
   }
}
