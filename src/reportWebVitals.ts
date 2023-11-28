import {type ReportHandler} from "web-vitals";

const reportWebVitals = async (onPerfEntry?: ReportHandler): Promise<void> => {
  if (onPerfEntry !== null && onPerfEntry instanceof Function) {
    try {
      const webVitals = await import("web-vitals");
      const {getCLS, getFID, getFCP, getLCP, getTTFB} = webVitals;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    } catch (error) {
      console.error("Error importing web-vitals:", error);
    }
  }
};

export default reportWebVitals;
