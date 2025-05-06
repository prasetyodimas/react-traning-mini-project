import { useState, useEffect } from 'react';
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import useDynamicTranslation from "@/hooks/translations/useDynamicTranslation";
import "../../config/translations/i18n";
import { getFeatureOne } from "@modules/feature-one/services/feature-one.service";
import { FEATURE_ONE_API } from "@config/constant/api/feature-one/feature-one.api";
import TableTraning from '@modules/feature-one/components/table';

const VITE_ENV = import.meta.env?.VITE_ENV;

const FeatureOne = () => {
  const { t, i18n } = useDynamicTranslation("feature-one");
  const [customerData, setCutomerData] = useState([]);

  const fetchDataNotes = async () => {
    const response = await getFeatureOne(FEATURE_ONE_API.GET.NOTES);
    const parseData = await response
    setCutomerData(parseData);
  };

  useEffect(() => {
    fetchDataNotes();
  }, []);


  return (
    <section> 
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>

      <img src={viteLogo} alt="Vite logo" width={200} height={100}/>
      <img src={reactLogo} alt="React logo" width={200} height={100}/>
      <h2>{t("featureOne.titleName")}</h2>
      <h4>{t("featureOne.descriptions")}</h4>
      <p>{`Running env on : ${VITE_ENV} mode`}</p>

      <button onClick={() => i18n.changeLanguage("en")}>English</button>
      <button onClick={() => i18n.changeLanguage("id")}>Indonesia</button>

      <div style={{marginTop: '2rem'}}>
        <TableTraning 
          data={customerData} 
          columns={['id', 'customer_name', 'amount', 'note', 'category_transaction', 'createdAt', 'updatedAt']}
        >
        </TableTraning>
      </div>

    </section>
  );
};

export default FeatureOne;
