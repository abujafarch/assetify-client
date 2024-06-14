import { useLocation } from "react-router-dom";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image, PDFViewer } from '@react-pdf/renderer';
import useAuthInfo from "../../../../hooks/useAuthInfo";


const styles = StyleSheet.create({
    page: {
        padding: 30,
    },
    header: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    section: {
        marginBottom: 10,
        fontSize: 14
    },
    subSection: {
        marginTop: 10,
        fontSize: 11
    },
    image: {
        width: 40,
        height: 40,
        objectFit: 'cover',
        margin: '10 auto'
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 30,
        right: 30,
        textAlign: 'center',
        fontSize: 10,
    },
});

const PrintAsset = () => {
    const { state: assetItem } = useLocation()
    const { employeeInfo } = useAuthInfo()
    // console.log(assetItem)

    return (
        <PDFViewer width='100%' height='800'>
            <Document>
                <Page size='A4' style={styles.page}>
                    <View style={styles.header}>

                        <Image style={styles.image} src={employeeInfo.companyLogo} />

                        <Text>{employeeInfo?.companyName}</Text>
                        <Text style={styles.subSection}>HR: {employeeInfo?.hrName}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text >Asset Name:{assetItem?.assetName}</Text>
                        <Text style={styles.subSection}>Name:{assetItem?.requesterName}</Text>
                        <Text style={styles.subSection}>Email:{assetItem?.requesterEmail}</Text>
                        <Text style={styles.subSection}>Returnability:{assetItem?.returnability}</Text>
                        <Text style={styles.subSection}>Request Date:{assetItem?.requestedDate}</Text>
                        <Text style={styles.subSection}>Approve Date:{assetItem?.approveDate}</Text>
                        <Text style={styles.subSection}>Note:{assetItem?.additionalNote}</Text>
                    </View>

                    <View style={styles.footer}>
                        <Text>{new Date().toLocaleDateString('en-GB')}</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
};

export default PrintAsset;