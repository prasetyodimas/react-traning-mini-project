import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from '../../components/layout';
import useDynamicTranslation from "../../hooks/translations/useDynamicTranslation";
import "../../config/translations/i18n";

const VITE_ENV = import.meta.env.VITE_ENV;

/**
 * A component that displays a sample feature two page.
 *
 * It includes a Vite and React logo, a heading, and a paragraph
 * indicating the environment mode in which the app is running.
 *
 * The component is wrapped with a Layout component.
*/

const FeatureTwo = () => {

  const { t } = useDynamicTranslation("feature-one");

  return (
    <Layout>
      <section>
        <h1>{t("welcome")}</h1>
        <p>{t("description")}</p>
        <img src={viteLogo} alt="Vite logo" width={200} height={100}/>
        <img src={reactLogo} alt="React logo" width={200} height={100}/>
        <h2>Feature Two</h2>
        <h4>This is a sample component for feature two.</h4>
        <p>{`Running env on : ${VITE_ENV} mode`}</p>
      </section>
    </Layout>
  );
};

export default FeatureTwo;

