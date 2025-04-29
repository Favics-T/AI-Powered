import { createContext, useState } from 'react';
import axios from 'axios';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [summarizedText, setSummarizedText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [detectedLanguage, setDetectedLanguage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = import.meta.env.VITE_HUGGINGFACE_TOKEN;

  // Function to handle summarization
  const summarizeText = async (text) => {
    if (!text.trim()) {
      setError('Please enter some text to summarize.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
        { inputs: text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSummarizedText(response.data[0].summary_text);
    } catch (err) {
      setError(err.response?.data?.error || 'Error fetching summary');
      console.error(err.response || err);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle translation
  const translateText = async (text, targetLang = 'es') => {
    if (!text.trim()) {
      setError('Please enter some text to translate.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `https://api-inference.huggingface.co/models/Helsinki-NLP/opus-mt-en-${targetLang}`,
        { inputs: text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTranslatedText(response.data[0].translation_text);
    } catch (err) {
      setError(err.response?.data?.error || 'Error fetching translation');
      console.error(err.response || err);
    } finally {
      setLoading(false);
    }
  };

  // Function to detect language
  const detectLanguage = async (text) => {
    if (!text.trim()) {
      setError('Please enter some text to detect language.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/papluca/xlm-roberta-base-language-detection',
        { inputs: text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDetectedLanguage(response.data[0].label); // label = language code or name
    } catch (err) {
      setError(err.response?.data?.error || 'Error detecting language');
      console.error(err.response || err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DataContext.Provider
      value={{
        summarizedText,
        summarizeText,
        translatedText,
        translateText,
        detectedLanguage,
        detectLanguage,
        loading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
