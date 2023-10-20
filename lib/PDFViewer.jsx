import React from "react";
import Pdf from "react-native-pdf";
import { View } from "../components/Themed";

const PDFViewer = ({ pdfUri }) => {
  return (
    <View style={{ flex: 1 }}>
      <Pdf source={{ uri: pdfUri, cache: true }} onLoadComplete={(numberOfPages, filePath) => {
        console.log(`number of pages: ${numberOfPages}`);
      }} />
    </View>
  );
};

export default PDFViewer;
