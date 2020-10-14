import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="AamirMuneer" />
    <h2>Personal Information</h2>
    <p>
      <h3>Address</h3>
      <p>House No:C # 380,Bhittai Colony Korangi Crossing.</p>
      <h3>Phone No</h3>
      <p>0310-2673678</p>
      <h3>Email</h3>
      <p>mantoamir035@gmail.com</p>
      <h3>Linkedin</h3>
      <p>linkedin.com/in/aamir-muneer</p>

    </p>
    
    <h2>Work Experience</h2>
    <table>
      <tr>
      <td>Experience</td>
      <td>Organization</td>
      <td>Designation</td>
      </tr>
      <tr>
        <td>Duration 1 year</td>
        <td>Habib Grammar School</td>
        <td>Maths Teacher </td>
      </tr>
      <tr>
        <td>Duration 6 months</td>
        <td>Ilma University</td>
        <td>Data Uploading On E-Commerce Website </td>
      </tr>
    </table>
    <h2>Education</h2>
    <table>
      <tr>
      <td>Year</td>
      <td>Institution</td>
      <td>Qualification</td>
      <td>Grade</td>
      </tr>
      <tr>
      <td>2016-2020</td>
      <td>Iqra University</td>
      <td>BS(CS)</td>
      <td>3.19</td>
      </tr>
      <tr>
      <td>2014-2016</td>
      <td>Adam Jee Government Science College</td>
      <td>Pre-Engineering</td>
      <td>B</td>
      </tr>
      <tr>
      <td>2012-2014</td>
      <td>Karachi Public School</td>
      <td>Science</td>
      <td>A+</td>
      </tr>
    </table>
    <h2>Projects</h2>
    <div>
      <div>1.Final Year Project: Intrusion Detection System By Using Machine Learning Techniques.</div>
      <div>2.Research Paper: Intrusion Detection Using Machine Learning(not publish yet).</div>
      <div>3.School Website(Asp.net) for Web Programming Langauge Project.</div>
      <div>4.School Management System in C# with Sql for Database Management System Project.</div>
      <div>5.Point Of Sale for Visual Programming Project.</div>
      <div>6.Researches On different datasets for Data Science.</div>
    </div>
  
    <div>
    <h2>Softwares</h2>
    <div>Python</div>
    <div>R Studio</div>
    <div>Knime Analytics Platform</div>
    <div>Sql Server Management Studio</div>
    <div>Visual Studio</div>
    <div>Eclipse</div>
    </div>
    
        
  </Layout>
)

export default IndexPage
