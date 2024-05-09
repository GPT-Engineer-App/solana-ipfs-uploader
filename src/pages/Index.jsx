import { useState } from "react";
import { Container, VStack, Button, Input, Text, useToast, Heading, Image } from "@chakra-ui/react";
import { FaUpload, FaWallet } from "react-icons/fa";

const Index = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const toast = useToast();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const connectWallet = () => {
    toast({
      title: "Wallet Connected",
      description: "Simulated wallet connection successful.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const uploadToIPFS = () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: "File Uploaded",
      description: "Simulated upload to IPFS successful.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Simulate storing hash on Solana
    storeHashOnSolana("Qm...fakeHash");
  };

  const storeHashOnSolana = (hash) => {
    toast({
      title: "Hash Stored",
      description: `Simulated storing of hash ${hash} on Solana Devnet successful.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>IPFS & Solana Integration</Heading>
        <Button leftIcon={<FaWallet />} colorScheme="teal" onClick={connectWallet}>
          Connect Wallet
        </Button>
        <Input type="file" onChange={handleFileChange} placeholder="Upload file" size="md" />
        {fileUrl && <Image src={fileUrl} alt="Preview" boxSize="100px" objectFit="cover" />}
        <Button leftIcon={<FaUpload />} colorScheme="purple" onClick={uploadToIPFS} isDisabled={!file}>
          Upload to IPFS
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
