import React, { useState, useRef } from 'react';
import JSZip from 'jszip';

// Custom Icons as SVG components
const CompressIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="compress-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L4 7m3-3l3 3m6 0v12m0 0l3-3m-3 3l-3-3" />
  </svg>
);

const FileUploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="file-upload-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const DocumentCompressor = () => {
  // State Management
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [compressionResults, setCompressionResults] = useState([]);
  const [compressionLevel, setCompressionLevel] = useState(5);
  const [isCompressing, setIsCompressing] = useState(false);
  const fileInputRef = useRef(null);

  // File Type Icons Mapping
  const getFileTypeIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    const iconStyle = "file-type-icon";

    const iconMap = {
      'pdf': <span className={iconStyle}>📄</span>,
      'docx': <span className={iconStyle}>📄</span>,
      'doc': <span className={iconStyle}>📄</span>,
      'txt': <span className={iconStyle}>📝</span>,
      'jpg': <span className={iconStyle}>🖼️</span>,
      'jpeg': <span className={iconStyle}>🖼️</span>,
      'png': <span className={iconStyle}>🖼️</span>,
      'xlsx': <span className={iconStyle}>📊</span>,
      'xls': <span className={iconStyle}>📊</span>
    };

    return iconMap[extension] || <span className={iconStyle}>📁</span>;
  };

  // File Selection Handler
  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
    setCompressionResults([]);
  };

  // Compress Files
  const compressFile = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        const zip = new JSZip();
        
        // Add file to zip with compression
        zip.file(file.name, content, {
          compression: "DEFLATE",
          compressionOptions: {
            level: compressionLevel
          }
        });

        // Generate zip file
        zip.generateAsync({ type: "blob" })
          .then((blob) => {
            const compressedSize = blob.size;
            resolve({
              originalName: file.name,
              originalSize: file.size,
              compressedSize,
              compressionRatio: ((file.size - compressedSize) / file.size * 100).toFixed(2),
              blob
            });
          })
          .catch(reject);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const handleCompression = async () => {
    setIsCompressing(true);
    try {
      const results = await Promise.all(selectedFiles.map(file => compressFile(file)));
      setCompressionResults(results);
    } catch (error) {
      console.error('Compression error:', error);
      alert('An error occurred while compressing files. Please try again.');
    } finally {
      setIsCompressing(false);
    }
  };

  // Download Compressed Files
  const handleDownload = (result) => {
    const url = window.URL.createObjectURL(result.blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `compressed_${result.originalName}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="document-compressor-container">
      <div className="document-compressor-card">
        {/* Header */}
        <div className="document-compressor-header">
          <CompressIcon />
          <h1 className="document-compressor-title">
            Smart Document Compressor
          </h1>
        </div>

        {/* File Upload Section */}
        <div className="document-compressor-section">
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileSelect}
            multiple 
            className="file-input"
          />
          <button 
            onClick={() => fileInputRef.current.click()}
            className="upload-button"
          >
            <FileUploadIcon />
            <span>Select Files to Compress</span>
          </button>
        </div>

        {/* Compression Level Slider */}
        <div className="document-compressor-section">
          <label className="compression-label">
            Compression Level: {compressionLevel}/10
          </label>
          <input 
            type="range" 
            min="1" 
            max="10" 
            value={compressionLevel}
            onChange={(e) => setCompressionLevel(e.target.value)}
            className="compression-slider"
          />
        </div>

        {/* Selected Files List */}
        {selectedFiles.length > 0 && (
          <div className="document-compressor-section">
            <h3 className="section-title">Selected Files</h3>
            <div className="files-grid">
              {selectedFiles.map((file, index) => (
                <div 
                  key={index} 
                  className="file-item"
                >
                  {getFileTypeIcon(file.name)}
                  <div className="file-info">
                    <p className="file-name">{file.name}</p>
                    <p className="file-size">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Compress Button */}
        {selectedFiles.length > 0 && (
          <button 
            onClick={handleCompression}
            className="compress-button"
            disabled={isCompressing}
          >
            <span>🗜️</span>
            <span>{isCompressing ? 'Compressing...' : 'Compress Files'}</span>
          </button>
        )}

        {/* Compression Results */}
        {compressionResults.length > 0 && (
          <div className="compression-results">
            <h3 className="results-title">Compression Results</h3>
            <div className="results-list">
              {compressionResults.map((result, index) => (
                <div 
                  key={index} 
                  className="result-item"
                >
                  {getFileTypeIcon(result.originalName)}
                  <div className="result-info">
                    <p className="result-name">{result.originalName}</p>
                    <div className="result-details">
                      <span>Original Size: {(result.originalSize / 1024).toFixed(2)} KB</span>
                      <span>Compressed Size: {(result.compressedSize / 1024).toFixed(2)} KB</span>
                      <span>Compression: {result.compressionRatio}%</span>
                    </div>
                    <button 
                      onClick={() => handleDownload(result)}
                      className="download-button"
                    >
                      <span>⬇️</span>
                      <span>Download Compressed File</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Information Section */}
        <div className="info-section success">
          <span className="info-icon">✅</span>
          <p className="info-text">
            Supported file types: PDF, DOCX, TXT, JPG, PNG, XLSX
          </p>
        </div>

        {/* Limitations Note */}
        <div className="info-section warning">
          <span className="info-icon">❌</span>
          <p className="info-text">
            Maximum file size: 50 MB per file
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocumentCompressor; 