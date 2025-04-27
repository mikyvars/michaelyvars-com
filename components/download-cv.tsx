import Button from "./button";

const DownloadCV = () => {
  return (
    <Button
      onClick={() => window?.open("/files/michael-yvars-cv.pdf", "_blank")}
    >
      Télécharger mon CV
    </Button>
  );
};

export default DownloadCV;
