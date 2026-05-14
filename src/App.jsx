import { useState } from "react";

function getBMICategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Healthy weight";
  if (bmi < 30) return "Overweight";
  return "Obesity";
}

export default function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const weightKg = parseFloat(weight);
    const heightM = parseFloat(height) / 100;

    if (!weightKg || !heightM || weightKg <= 0 || heightM <= 0) {
      alert("Please enter valid weight and height.");
      return;
    }

    const result = weightKg / (heightM * heightM);
    setBmi(result.toFixed(1));
  };

  return (
    <div style={styles.page}>
      <div style={styles.nav}>
        <strong>BMI Guide</strong>
        <div style={styles.navLinks}>
          <a style={styles.navLink} href="#calculator">Calculator</a>
          <a style={styles.navLink} href="#categories">Categories</a>
          <a style={styles.navLink} href="#about-bmi">About BMI</a>
          <a style={styles.navLink} href="#privacy">Privacy</a>
          <a style={styles.navLink} href="#disclaimer">Disclaimer</a>
          <a style={styles.navLink} href="#about">About</a>
        </div>
      </div>

      <div style={styles.hero}>
        <p style={styles.smallTitle}>FREE HEALTH TOOL</p>
        <h1 style={styles.heroTitle}>Free Adult BMI Calculator</h1>
        <p style={styles.heroText}>
          Calculate your Body Mass Index and understand your adult BMI category.
          This tool is for educational purposes and is not medical advice.
        </p>
      </div>

      <div id="calculator" style={styles.card}>
        <h1 style={styles.title}>Adult BMI Calculator</h1>

        <p style={styles.text}>
          Calculate your Body Mass Index using your weight and height. This
          calculator is designed for adults aged 20 years and older.
        </p>

        <div style={styles.field}>
          <label style={styles.label}>Weight</label>
          <input
            style={styles.input}
            type="number"
            placeholder="kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Height</label>
          <input
            style={styles.input}
            type="number"
            placeholder="cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <button style={styles.button} onClick={calculateBMI}>
          Calculate BMI
        </button>

        {bmi && (
          <div style={styles.result}>
            <h2>Your BMI: {bmi}</h2>
            <p>Category: {getBMICategory(parseFloat(bmi))}</p>
          </div>
        )}
      </div>

      <div id="categories" style={styles.tableCard}>
        <h2>Adult BMI Categories</h2>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>BMI</th>
              <th style={styles.th}>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Below 18.5</td>
              <td style={styles.td}>Underweight</td>
            </tr>
            <tr>
              <td style={styles.td}>18.5 – 24.9</td>
              <td style={styles.td}>Healthy weight</td>
            </tr>
            <tr>
              <td style={styles.td}>25.0 – 29.9</td>
              <td style={styles.td}>Overweight</td>
            </tr>
            <tr>
              <td style={styles.td}>30.0 and above</td>
              <td style={styles.td}>Obesity</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.source}>
          Source: Adult BMI categories are based on CDC and NIH/NHLBI guidance.
          BMI is a screening tool, not a diagnostic measure. For children and
          teens aged 2–19 years, BMI should be interpreted using age- and
          sex-specific BMI-for-age percentiles.
        </p>
      </div>

      <div id="about-bmi" style={styles.infoCard}>
        <h2>What is BMI?</h2>
        <p style={styles.text}>
          Body Mass Index, or BMI, is a simple calculation using your height and
          weight. It can help identify whether an adult may be in an underweight,
          healthy weight, overweight, or obesity category.
        </p>

        <h2>What BMI cannot tell you</h2>
        <p style={styles.text}>
          BMI does not directly measure body fat, muscle mass, bone density,
          fitness level, or fat distribution. Adult BMI categories are the same for
          males and females, but BMI cannot show differences in body composition.
          For example, athletes may have a higher BMI because of greater muscle mass.
        </p>

        <h2 id="disclaimer">Medical disclaimer</h2>
        <p style={styles.text}>
          This calculator is for educational purposes only. BMI is a screening
          tool and not a diagnosis. Please speak with a qualified healthcare
          professional for personal medical advice.
        </p>
      </div>
        <div id="about" style={styles.infoCard}>
         <h2>About this site</h2>
         <p style={styles.text}>
          BMI Guide is a simple educational website created to help adults
          calculate Body Mass Index and understand what BMI can and cannot tell
          them. The information is designed for general education only and
          should not replace advice from a qualified healthcare professional.
        </p>
      </div>
             <div id="privacy" style={styles.infoCard}>
        <h2>Privacy Policy</h2>
        <p style={styles.text}>
          This website is designed to provide a simple BMI calculator and
          educational information. At this stage, the calculator runs in your
          browser and does not require you to create an account or submit your
          name, email address, or other personal information.
        </p>

        <p style={styles.text}>
          If this website later uses analytics, advertising, or affiliate links,
          third-party services may collect limited information such as browser
          type, device information, pages visited, or approximate location. This
          information may be used to understand site traffic, improve the
          website, display advertisements, or measure affiliate referrals.
        </p>

        <p style={styles.text}>
          This privacy policy may be updated as the website develops. Visitors
          should review this section periodically for changes.
        </p>
      </div>
      <p style={styles.footer}>
        Educational information only. This website does not provide medical
        advice.
      </p>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f7f5f0",
    padding: "32px 20px",
    fontFamily: "Arial, sans-serif",
    color: "#1a1814",
  },
  nav: {
    maxWidth: "900px",
    margin: "0 auto 32px",
    padding: "16px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #e8e4dc",
  },
  navLinks: {
    display: "flex",
    gap: "16px",
    fontSize: "14px",
  },
  navLink: {
    color: "#555",
    textDecoration: "none",
  },
  hero: {
    maxWidth: "800px",
    margin: "0 auto 28px",
    textAlign: "center",
    padding: "20px 0",
  },
  smallTitle: {
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: "2px",
    color: "#8a7f70",
    marginBottom: "12px",
  },
  heroTitle: {
    fontSize: "44px",
    marginBottom: "16px",
    color: "#1a1814",
  },
  heroText: {
    fontSize: "17px",
    lineHeight: "1.6",
    color: "#666",
    maxWidth: "680px",
    margin: "0 auto",
  },
  card: {
    maxWidth: "600px",
    margin: "0 auto 24px",
    background: "white",
    padding: "32px",
    borderRadius: "12px",
    border: "1px solid #e8e4dc",
  },
  tableCard: {
    maxWidth: "700px",
    margin: "0 auto 24px",
    background: "white",
    padding: "32px",
    borderRadius: "12px",
    border: "1px solid #e8e4dc",
  },
  infoCard: {
    maxWidth: "700px",
    margin: "0 auto 24px",
    background: "white",
    padding: "32px",
    borderRadius: "12px",
    border: "1px solid #e8e4dc",
  },
  title: {
    fontSize: "36px",
    marginBottom: "16px",
    textAlign: "center",
  },
  text: {
    lineHeight: "1.6",
    color: "#666",
    marginBottom: "24px",
  },
  field: {
    marginBottom: "16px",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "14px",
    background: "#1a1814",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  },
  result: {
    marginTop: "24px",
    padding: "20px",
    background: "#f7f5f0",
    borderRadius: "8px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "16px",
  },
  th: {
    textAlign: "left",
    borderBottom: "1px solid #ddd",
    padding: "10px",
  },
  td: {
    borderBottom: "1px solid #eee",
    padding: "10px",
  },
  source: {
    marginTop: "16px",
    fontSize: "13px",
    color: "#666",
    lineHeight: "1.6",
  },
  footer: {
    textAlign: "center",
    fontSize: "13px",
    color: "#777",
  },
};