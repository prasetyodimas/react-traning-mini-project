import { useTranslation } from "react-i18next";

/**
 * useDynamicTranslation
 * Dynamically load translations based on the module.
 *
 * @param {string} module - The name of the module (e.g., "feature-one", "feature-two")
 * @param {string} defaultNs - Default namespace if the module is not provided
 * @returns {Object} - i18next translation object
 */
const useDynamicTranslation = (module, defaultNs = "feature-one") => {
  const namespace = module || defaultNs;
  return useTranslation(namespace);
};

export default useDynamicTranslation;
