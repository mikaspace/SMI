// app/admin/AdminUploadCSVScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as DocumentPicker from "expo-document-picker";

export default function AdminUploadCSVScreen() {
  const router = useRouter();

  const [selectedFile, setSelectedFile] = useState(null);
  const [mode, setMode] = useState("upload");

  const [formData, setFormData] = useState({
    firstName: "",
    middleInitial: "",
    lastName: "",
    shareCapital: "",
    savings: "",
    specialSavings: "",

    regularLoan: "",
    regularLoanDiminishing: "",
    educationalLoan: "",
    educationalLoanDiminishing: "",
    shortTermLoan: "",
    shortTermLoanDiminishing: "",
    applianceLoan: "",
    applianceLoanDiminishing: "",
    medicalLoan: "",
    medicalLoanDiminishing: "",
    pettyCashLoan: "",
    vehicleLoan: "",
    interTradingLoan: "",
  });

  const totalLoanBalance =
    Number(formData.regularLoan || 0) +
    Number(formData.regularLoanDiminishing || 0) +
    Number(formData.educationalLoan || 0) +
    Number(formData.educationalLoanDiminishing || 0) +
    Number(formData.shortTermLoan || 0) +
    Number(formData.shortTermLoanDiminishing || 0) +
    Number(formData.applianceLoan || 0) +
    Number(formData.applianceLoanDiminishing || 0) +
    Number(formData.medicalLoan || 0) +
    Number(formData.medicalLoanDiminishing || 0) +
    Number(formData.pettyCashLoan || 0) +
    Number(formData.vehicleLoan || 0) +
    Number(formData.interTradingLoan || 0);

  function updateField(field, value) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function pickCSVFile() {
    const result = await DocumentPicker.getDocumentAsync({
      type: [
        "text/csv",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ],
      copyToCacheDirectory: true,
    });

    if (!result.canceled) {
      setSelectedFile(result.assets[0]);
    }
  }

  function clearManualForm() {
    setFormData({
      firstName: "",
      middleInitial: "",
      lastName: "",
      shareCapital: "",
      savings: "",
      specialSavings: "",

      regularLoan: "",
      regularLoanDiminishing: "",
      educationalLoan: "",
      educationalLoanDiminishing: "",
      shortTermLoan: "",
      shortTermLoanDiminishing: "",
      applianceLoan: "",
      applianceLoanDiminishing: "",
      medicalLoan: "",
      medicalLoanDiminishing: "",
      pettyCashLoan: "",
      vehicleLoan: "",
      interTradingLoan: "",
    });
  }

  return (
    <View style={styles.page}>
      <View style={styles.phone}>
        <View style={styles.header}>
          <View style={styles.statusRow}>
            <Text style={styles.time}>9:41</Text>

            <View style={styles.batteryWrap}>
              <View style={styles.battery} />
              <View style={styles.batterySmall} />
            </View>
          </View>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.push("/admin/AdminDashboardScreen")}
          >
            <Feather name="arrow-left" size={18} color="#ffffff" />
            <Text style={styles.backText}>Back to Dashboard</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Upload Records</Text>
          <Text style={styles.subtitle}>Import or manually encode member data</Text>
        </View>

        <View style={styles.modeTabs}>
          <TouchableOpacity
            style={mode === "upload" ? styles.modeTabActive : styles.modeTab}
            onPress={() => setMode("upload")}
          >
            <Feather
              name="upload-cloud"
              size={16}
              color={mode === "upload" ? "#ffffff" : "#009060"}
            />
            <Text style={mode === "upload" ? styles.modeTextActive : styles.modeText}>
              CSV Upload
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={mode === "manual" ? styles.modeTabActive : styles.modeTab}
            onPress={() => setMode("manual")}
          >
            <Feather
              name="edit-3"
              size={16}
              color={mode === "manual" ? "#ffffff" : "#009060"}
            />
            <Text style={mode === "manual" ? styles.modeTextActive : styles.modeText}>
              Manual Input
            </Text>
          </TouchableOpacity>
        </View>

        {mode === "upload" ? (
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            <View style={styles.uploadCard}>
              <View style={styles.uploadIcon}>
                <Feather name="upload-cloud" size={38} color="#00a86b" />
              </View>

              <Text style={styles.uploadTitle}>Select CSV or Excel File</Text>
              <Text style={styles.uploadSub}>
                Upload member records, savings, share capital, special savings, and loan balances.
              </Text>

              <TouchableOpacity style={styles.chooseButton} onPress={pickCSVFile}>
                <Feather name="file-plus" size={18} color="#ffffff" />
                <Text style={styles.chooseText}>Choose File</Text>
              </TouchableOpacity>
            </View>

            {selectedFile && (
              <View style={styles.fileCard}>
                <View style={styles.fileIconBox}>
                  <Feather name="file-text" size={26} color="#00a86b" />
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.fileName}>{selectedFile.name}</Text>
                  <Text style={styles.fileSize}>
                    {selectedFile.size
                      ? `${(selectedFile.size / 1024).toFixed(2)} KB`
                      : "File selected"}
                  </Text>
                </View>

                <Ionicons name="checkmark-circle" size={24} color="#00a86b" />
              </View>
            )}

            <View style={styles.infoCard}>
              <Text style={styles.infoTitle}>Required CSV Columns</Text>

              <InfoLine text="First Name, Middle Initial, Last Name" />
              <InfoLine text="Share Capital, Savings, Special Savings" />
              <InfoLine text="All loan type balances" />
              <InfoLine text="Total Loan Balance" />
            </View>

            <TouchableOpacity
              style={[styles.uploadButton, !selectedFile && styles.uploadDisabled]}
              disabled={!selectedFile}
            >
              <Feather name="upload" size={18} color="#ffffff" />
              <Text style={styles.uploadButtonText}>Upload and Process File</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => router.push("/admin/AdminDashboardScreen")}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </ScrollView>
        ) : (
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            <View style={styles.manualCard}>
              <Text style={styles.sectionTitle}>Member Information</Text>

              <InputField
                label="First Name"
                value={formData.firstName}
                onChangeText={(value) => updateField("firstName", value)}
                placeholder="e.g. Maria"
              />

              <InputField
                label="Middle Initial"
                value={formData.middleInitial}
                onChangeText={(value) => updateField("middleInitial", value)}
                placeholder="e.g. C"
                maxLength={2}
              />

              <InputField
                label="Last Name"
                value={formData.lastName}
                onChangeText={(value) => updateField("lastName", value)}
                placeholder="e.g. Santos"
              />
            </View>

            <View style={styles.manualCard}>
              <Text style={styles.sectionTitle}>Savings Information</Text>

              <InputField
                label="Share Capital"
                value={formData.shareCapital}
                onChangeText={(value) => updateField("shareCapital", value)}
                placeholder="0.00"
                keyboardType="numeric"
              />

              <InputField
                label="Savings"
                value={formData.savings}
                onChangeText={(value) => updateField("savings", value)}
                placeholder="0.00"
                keyboardType="numeric"
              />

              <InputField
                label="Special Savings"
                value={formData.specialSavings}
                onChangeText={(value) => updateField("specialSavings", value)}
                placeholder="0.00"
                keyboardType="numeric"
              />
            </View>

            <View style={styles.manualCard}>
              <Text style={styles.sectionTitle}>Loan Balances</Text>

              <InputField
                label="Regular Loan"
                value={formData.regularLoan}
                onChangeText={(value) => updateField("regularLoan", value)}
                placeholder="0.00"
                keyboardType="numeric"
              />

              <InputField
                label="Regular Loan - Diminishing"
                value={formData.regularLoanDiminishing}
                onChangeText={(value) => updateField("regularLoanDiminishing", value)}
                placeholder="0.00"
                keyboardType="numeric"
              />

              <InputField
                label="Educational Loan"
                value={formData.educationalLoan}
                onChangeText={(value) => updateField("educationalLoan", value)}
                placeholder="0.00"
                keyboardType="numeric"
              />

              <InputField
                label="Educational Loan - Diminishing"
                value={formData.educationalLoanDiminishing}
                onChangeText={(value) => updateField("educationalLoanDiminishing", value)}
                placeholder="0.00"
                keyboardType="numeric"
              />

              <InputField
                label="Short-term Loan"
                value={formData.shortTermLoan}
                onChangeText={(value) => updateField("shortTermLoan", value)}
                placeholder="0.00"
                keyboardType="numeric"
              />

              <InputField
                label="Short-term Loan - Diminishing"
                value={formData.shortTermLoanDiminishing}
                onChangeText={(value) => updateField("shortTermLoanDiminishing", value)}
                placeholder="0.00"
                keyboardType="numeric"
              />

              <InputField
                label="Appliance Loan"
                value={formData.applianceLoan}
                onChangeText={(value) => updateField("applianceLoan", value)}
                placeholder="0.00"
                keyboardType="numeric"
              />

              <InputField
                label="Appliance Loan - Diminishing"
                value={formData.applianceLoanDiminishing}
                onChangeText={(value) => updateField("applianceLoanDiminishing", value)}
                placeholder="0.00"
                keyboardType="numeric"
              />

              <InputField
                label="Medical Loan"
                value={formData.medicalLoan}
                onChangeText={(value) => updateField("medicalLoan", value)}
                placeholder="0.00"
                keyboardType="numeric"
              />

              <InputField
                label="Medical Loan - Diminishing"
                value={formData.medicalLoanDiminishing}
                onChangeText={(value) => updateField("medicalLoanDiminishing", value)}
                placeholder="0.00"
                keyboardType="numeric"
              />

              <InputField
                label="Petty Cash Loan"
                value={formData.pettyCashLoan}
                onChangeText={(value) => updateField("pettyCashLoan", value)}
                placeholder="0.00"
                keyboardType="numeric"
              />

              <InputField
                label="Vehicle Loan"
                value={formData.vehicleLoan}
                onChangeText={(value) => updateField("vehicleLoan", value)}
                placeholder="0.00"
                keyboardType="numeric"
              />

              <InputField
                label="Inter-Trading Loan"
                value={formData.interTradingLoan}
                onChangeText={(value) => updateField("interTradingLoan", value)}
                placeholder="0.00"
                keyboardType="numeric"
              />
            </View>

            <View style={styles.totalCard}>
              <Text style={styles.totalLabel}>TOTAL LOAN BALANCE</Text>
              <Text style={styles.totalAmount}>₱{totalLoanBalance.toLocaleString()}.00</Text>
            </View>

            <TouchableOpacity style={styles.saveButton}>
              <Feather name="save" size={18} color="#ffffff" />
              <Text style={styles.saveButtonText}>Save Manual Record</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.clearButton} onPress={clearManualForm}>
              <Feather name="refresh-cw" size={17} color="#e23b3b" />
              <Text style={styles.clearButtonText}>Clear Form</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      </View>
    </View>
  );
}

function InputField({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  maxLength,
}) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>{label}</Text>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9caea6"
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
    </View>
  );
}

function InfoLine({ text }) {
  return (
    <View style={styles.infoLine}>
      <Ionicons name="checkmark-circle-outline" size={16} color="#00a86b" />
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#005033",
    alignItems: "center",
    justifyContent: "center",
  },

  phone: {
    width: 390,
    height: 844,
    backgroundColor: "#eafff4",
    borderRadius: 36,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#2b7553",
  },

  header: {
    backgroundColor: "#06472f",
    paddingHorizontal: 22,
    paddingTop: 12,
    paddingBottom: 24,
  },

  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  time: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "800",
  },

  batteryWrap: {
    flexDirection: "row",
    alignItems: "center",
  },

  battery: {
    width: 16,
    height: 9,
    backgroundColor: "#ffffff",
    borderRadius: 2,
  },

  batterySmall: {
    width: 3,
    height: 7,
    backgroundColor: "#ffffff",
    borderRadius: 1,
    marginLeft: 2,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },

  backText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "700",
    marginLeft: 8,
  },

  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "900",
    marginTop: 24,
  },

  subtitle: {
    color: "#5ff0b1",
    fontSize: 14,
    marginTop: 5,
  },

  modeTabs: {
    height: 58,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#d9eee6",
  },

  modeTab: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#bdebd7",
    backgroundColor: "#f0fbf6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
  },

  modeTabActive: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: "#009060",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
  },

  modeText: {
    color: "#009060",
    fontSize: 13,
    fontWeight: "900",
    marginLeft: 7,
  },

  modeTextActive: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "900",
    marginLeft: 7,
  },

  content: {
    flex: 1,
    padding: 22,
  },

  uploadCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    marginBottom: 16,
  },

  uploadIcon: {
    width: 78,
    height: 78,
    borderRadius: 22,
    backgroundColor: "#e6fff2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  uploadTitle: {
    color: "#002c1d",
    fontSize: 18,
    fontWeight: "900",
  },

  uploadSub: {
    color: "#7f8790",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 20,
    marginTop: 8,
    marginBottom: 18,
  },

  chooseButton: {
    height: 44,
    borderRadius: 12,
    backgroundColor: "#009060",
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
  },

  chooseText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "900",
    marginLeft: 8,
  },

  fileCard: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  fileIconBox: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: "#e6fff2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  fileName: {
    color: "#002c1d",
    fontSize: 14,
    fontWeight: "900",
  },

  fileSize: {
    color: "#7f8790",
    fontSize: 11,
    marginTop: 4,
  },

  infoCard: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 18,
    marginBottom: 18,
  },

  infoTitle: {
    color: "#002c1d",
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 12,
  },

  infoLine: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  infoText: {
    color: "#344d41",
    fontSize: 13,
    marginLeft: 8,
  },

  uploadButton: {
    height: 50,
    borderRadius: 13,
    backgroundColor: "#009060",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 12,
  },

  uploadDisabled: {
    backgroundColor: "#9bcab8",
  },

  uploadButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "900",
    marginLeft: 8,
  },

  cancelButton: {
    height: 48,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#efb4a2",
    backgroundColor: "#fff8ef",
    justifyContent: "center",
    alignItems: "center",
  },

  cancelText: {
    color: "#e23b3b",
    fontSize: 14,
    fontWeight: "900",
  },

  manualCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
  },

  sectionTitle: {
    color: "#002c1d",
    fontSize: 16,
    fontWeight: "900",
    marginBottom: 14,
  },

  inputGroup: {
    marginBottom: 14,
  },

  inputLabel: {
    color: "#344d41",
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 7,
  },

  input: {
    height: 45,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#bdebd7",
    backgroundColor: "#f0fbf6",
    paddingHorizontal: 14,
    color: "#002c1d",
    fontSize: 14,
  },

  totalCard: {
    backgroundColor: "#06472f",
    borderRadius: 15,
    padding: 20,
    marginBottom: 14,
  },

  totalLabel: {
    color: "#5ff0b1",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1,
  },

  totalAmount: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "900",
    marginTop: 8,
  },

  saveButton: {
    height: 50,
    borderRadius: 13,
    backgroundColor: "#009060",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 12,
  },

  saveButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "900",
    marginLeft: 8,
  },

  clearButton: {
    height: 48,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#efb4a2",
    backgroundColor: "#fff8ef",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 40,
  },

  clearButtonText: {
    color: "#e23b3b",
    fontSize: 14,
    fontWeight: "900",
    marginLeft: 8,
  },
});