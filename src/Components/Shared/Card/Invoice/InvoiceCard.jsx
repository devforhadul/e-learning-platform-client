import { Button } from "@/Components/ui/button";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { useLocation } from "react-router";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
  },
  paidBadge: {
    backgroundColor: "green",
    color: "white",
    padding: "5px 10px",
    fontSize: 12,
    borderRadius: 4,
  },
  invoiceInfo: {
    textAlign: "right",
    marginBottom: 20,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  addressBlock: {
    width: "50%",
    lineHeight: 1,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#eee",
    padding: 6,
    borderTop: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
  },
  tableRow: {
    flexDirection: "row",
    padding: 6,
    borderBottom: "1px solid #eee",
  },
  col: {
    flex: 1,
  },
  summary: {
    marginTop: 20,
    alignItems: "flex-end",
  },
  textBold: {
    fontWeight: "bold",
  },
  textLogo: {
    fontWeight: 'bold',
    fontSize: '25px'
  }
});

export default function InvoiceCard() {
  const { state } = useLocation();
  const course = state?.course;
  const {
    classTitle,
    image,
    price,
    userEmail,
    userName,
    paymentStatus,

    transactionId,
    
  } = course;

  const InvoicePDF = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          {/* <Image
            style={styles.logo}
            src="https://i.ibb.co/6RJ4rCSy/download.png"
          /> */}
          <Text style={styles.textLogo}>Learnisty</Text>
          <Text style={styles.paidBadge}>{paymentStatus}</Text>
        </View>

        {/* Invoice Info */}
        <View style={styles.invoiceInfo}>
          <Text>Order ID: #93007</Text>
          <Text>Date of purchase: {new Date().toISOString().split('T')[0]}</Text>
        </View>

        {/* Addresses */}
        <View style={styles.section}>
          <View style={styles.addressBlock}>
            <Text style={styles.textBold}>Learnisty</Text>
            <Text>Feni, Bangladesh</Text>
            <Text>Chattogram</Text>
            <Text>info@learnisty.com</Text>
            <Text>01984839526</Text>
          </View>
          <View style={styles.addressBlock}>
            <Text style={styles.textBold}>{userName}</Text>
            <Text>{userEmail}</Text>
            <Text>+8801*********</Text>
          </View>
        </View>

        {/* Payment Info */}
        <View>
          <View style={styles.tableHeader}>
            <Text style={styles.col}>Payment Method</Text>
            <Text style={styles.col}>Payment Info</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.col}>Stripe (Card)</Text>
            <Text style={styles.col}>
             TRX ID: {transactionId}
            </Text>
          </View>
        </View>

        {/* Item Table */}
        <View style={{ marginTop: 20 }}>
          <View style={styles.tableHeader}>
            <Text style={styles.col}>Item</Text>
            <Text style={styles.col}>Price</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.col}>
              {classTitle}
            </Text>
            <Text style={styles.col}>{price} tk</Text>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.summary}>
          <Text>Subtotal: {price} tk</Text>
          <Text>Discount: 0 tk</Text>
          <Text style={styles.textBold}>Total: {price} tk</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="max-w-2xl mx-auto mt-6">
      {/* PDF Download */}
      <PDFDownloadLink
        document={<InvoicePDF />}
        fileName={`${course?.classTitle
          ?.split(" ")
          .slice(0, 4)
          .join(" ")} Invoice`}
      >
        <div className="text-center my-5">
          <Button className={"cursor-pointer"}>Download PDF</Button>
        </div>
      </PDFDownloadLink>
      <div className="w-full h-[700px]">
        <PDFViewer width={"100%"} height={"100%"}>
          <InvoicePDF />
        </PDFViewer>
      </div>
    </div>
  );
}
