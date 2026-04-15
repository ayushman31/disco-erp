export function getMimeType(filename: string): string {
    const ext = filename.split('.').pop()?.toLowerCase();
    
    const mimeTypes: Record<string, string> = {

        // audio
        mp3: 'audio/mpeg',
        wav: 'audio/wav',
        m4a: 'audio/mp4',
        aac: 'audio/aac',
        ogg: 'audio/ogg',
        flac: 'audio/flac',
        
        // video
        mp4: 'video/mp4',
        webm: 'video/webm',
        mov: 'video/quicktime',
        avi: 'video/x-msvideo',

        // images
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        png: 'image/png',
        gif: 'image/gif',
        bmp: 'image/bmp',
        svg: 'image/svg+xml',
        webp: 'image/webp',
        tif: 'image/tiff',
        tiff: 'image/tiff',

        
        // documents
        pdf: 'application/pdf',
        json: 'application/json',
        txt: 'text/plain',
        doc: 'application/msword',
        docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        xls: 'application/vnd.ms-excel',
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ppt: 'application/vnd.ms-powerpoint',
        pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',

        // archives / compressed
        zip: 'application/zip',
        rar: 'application/vnd.rar',
        tar: 'application/x-tar',
        gz: 'application/gzip',
        '7z': 'application/x-7z-compressed',
    };
  
    return mimeTypes[ext || ''] || 'application/octet-stream';
  }
  
  export function formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
  
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
  
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  }
  
  export function validateFileSize(size: number, maxSizeInMB: number): boolean {
    const maxBytes = maxSizeInMB * 1024 * 1024;
    return size <= maxBytes;
  }
  