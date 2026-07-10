// lq_skill_data.js
// LQ skills mapped to past paper questions (2012-2017)
const skillQuestionMap = {
  "Index": [
    { year: "2012(s)", section: "A1", question: "Q1", marks: 3 },
    { year: "2012 PP", section: "A1", question: "Q1", marks: 3 },
    { year: "2012", section: "A1", question: "Q1", marks: 3 },
    { year: "2013", section: "A1", question: "Q1", marks: 3 },
    { year: "2014", section: "A1", question: "Q1", marks: 3 },
    { year: "2015", section: "A1", question: "Q1", marks: 3 },
    { year: "2016", section: "A1", question: "Q1", marks: 3 },
    { year: "2017", section: "A1", question: "Q2", marks: 3 }
  ],
  "Factorization": [
    { year: "2012(s)", section: "A1", question: "Q3", marks: 3 },
    { year: "2012 PP", section: "A1", question: "Q3", marks: 3 },
    { year: "2012", section: "A1", question: "Q3", marks: 3 },
    { year: "2013", section: "A1", question: "Q3", marks: 3 },
    { year: "2014", section: "A1", question: "Q2", marks: 3 },
    { year: "2015", section: "A1", question: "Q4", marks: 4 },
    { year: "2016", section: "A1", question: "Q4", marks: 4 },
    { year: "2017", section: "A1", question: "Q3", marks: 3 }
  ],
  "Change Subject": [
    { year: "2012(s)", section: "A1", question: "Q2", marks: 3 },
    { year: "2012 PP", section: "A1", question: "Q2", marks: 3 },
    { year: "2012", section: "A1", question: "Q2", marks: 3 },
    { year: "2013", section: "A1", question: "Q2", marks: 3 },
    { year: "2014", section: "A1", question: "Q5", marks: 4 },
    { year: "2015", section: "A1", question: "Q2", marks: 3 },
    { year: "2016", section: "A1", question: "Q2", marks: 3 },
    { year: "2017", section: "A1", question: "Q1", marks: 3 }
  ],
  "%": [
    { year: "2012(s)", section: "A1", question: "Q4", marks: 4 },
    { year: "2012 PP", section: "A1", question: "Q4", marks: 4 },
    { year: "2012", section: "A1", question: "Q4", marks: 4 },
    { year: "2014", section: "A1", question: "Q6", marks: 4 },
    { year: "2015", section: "A1", question: "Q6", marks: 4 },
    { year: "2016", section: "A1", question: "Q5", marks: 4 },
    { year: "2017", section: "A1", question: "Q7b", marks: 2 }
  ],
  "Inequality": [
    { year: "2012", section: "A1", question: "Q6", marks: 4 },
    { year: "2013", section: "A1", question: "Q5", marks: 4 },
    { year: "2015", section: "A1", question: "Q5", marks: 4 },
    { year: "2016", section: "A1", question: "Q6", marks: 4 },
    { year: "2017", section: "A1", question: "Q5", marks: 4 }
  ],
  "Simultaneous Equation": [
    { year: "2012(s)", section: "A1", question: "Q5", marks: 4 },
    { year: "2012 PP", section: "A1", question: "Q5", marks: 4 },
    { year: "2012", section: "A1", question: "Q5", marks: 4 },
    { year: "2013", section: "A1", question: "Q4", marks: 4 },
    { year: "2015", section: "A1", question: "Q7", marks: 4 },
    { year: "2017", section: "A1", question: "Q4", marks: 4 }
  ],
  "Rational Function": [
    { year: "2016", section: "A1", question: "Q3", marks: 3 }
  ],
  "Error": [
    { year: "2013", section: "A1", question: "Q8", marks: 5 },
    { year: "2014", section: "A1", question: "Q3", marks: 3 },
    { year: "2017", section: "A1", question: "Q9", marks: 5 }
  ],
  "Rate and Ratio": [
    { year: "2015", section: "A2", question: "Q10", marks: 6 }
  ],
  "Statistics": [
    { year: "2012(s)", section: "A1", question: "Q9", marks: 5 },
    { year: "2012(s)", section: "A2", question: "Q14bi", marks: 7 },
    { year: "2012 PP", section: "A1", question: "Q9", marks: 5 },
    { year: "2012 PP", section: "A2", question: "Q13b", marks: 4 },
    { year: "2012 PP", section: "B", question: "Q15", marks: 4 },
    { year: "2012", section: "A1", question: "Q7", marks: 4 },
    { year: "2012", section: "A2", question: "Q10", marks: 6 },
    { year: "2012", section: "B", question: "Q15", marks: 3 },
    { year: "2013", section: "A1", question: "Q9", marks: 5 },
    { year: "2013", section: "A2", question: "Q10a", marks: 2 },
    { year: "2013", section: "B", question: "Q15", marks: 4 },
    { year: "2014", section: "A1", question: "Q4", marks: 3 },
    { year: "2014", section: "A2", question: "Q11", marks: 6 },
    { year: "2015", section: "A2", question: "Q12", marks: 7 },
    { year: "2015", section: "B", question: "Q15", marks: 4 },
    { year: "2016", section: "A1", question: "Q9", marks: 5 },
    { year: "2016", section: "A2", question: "Q12", marks: 7 },
    { year: "2016", section: "B", question: "Q16", marks: 3 },
    { year: "2017", section: "A2", question: "Q11a", marks: 5 }
  ],
  "Deductive Circle": [
    { year: "2012(s)", section: "A1", question: "Q7", marks: 4 },
    { year: "2012 PP", section: "A1", question: "Q7", marks: 4 },
    { year: "2012", section: "A1", question: "Q8", marks: 5 },
    { year: "2016", section: "A1", question: "Q8", marks: 5 }
  ],
  "Deductive Geometry": [
    { year: "2012 PP", section: "A2", question: "Q14a", marks: 2 },
    { year: "2013", section: "A1", question: "Q7", marks: 4 },
    { year: "2014", section: "A1", question: "Q9", marks: 5 },
    { year: "2015", section: "A2", question: "Q13", marks: 7 },
    { year: "2016", section: "A2", question: "Q13", marks: 7 },
    { year: "2017", section: "A2", question: "Q10a", marks: 2 }
  ],
  "Area Volume": [
    { year: "2012(s)", section: "A1", question: "Q6", marks: 4 },
    { year: "2012", section: "A1", question: "Q9", marks: 5 },
    { year: "2012", section: "A2", question: "Q12", marks: 7 },
    { year: "2013", section: "A2", question: "Q13", marks: 4 },
    { year: "2014", section: "A2", question: "Q14", marks: 8 },
    { year: "2015", section: "A1", question: "Q9", marks: 5 },
    { year: "2016", section: "A2", question: "Q11", marks: 6 },
    { year: "2017", section: "A2", question: "Q10b", marks: 4 }
  ],
  "Area Volume (2)": [
    { year: "2017", section: "A2", question: "Q12", marks: 7 }
  ],
  "Coordinate System": [
    { year: "2012 PP", section: "A1", question: "Q6", marks: 4 },
    { year: "2014", section: "A1", question: "Q6", marks: 4 },
    { year: "2015", section: "A1", question: "Q8a", marks: 2 },
    { year: "2015", section: "A2", question: "Q13b", marks: 4 },
    { year: "2016", section: "A1", question: "Q7", marks: 4 },
    { year: "2017", section: "A1", question: "Q6", marks: 4 }
  ],
  "Variation": [
    { year: "2012(s)", section: "A2", question: "Q11", marks: 6 },
    { year: "2012 PP", section: "A2", question: "Q11", marks: 6 },
    { year: "2012", section: "A2", question: "Q11", marks: 6 },
    { year: "2013", section: "A2", question: "Q11", marks: 6 },
    { year: "2014", section: "A2", question: "Q13a", marks: 4 },
    { year: "2015", section: "A2", question: "Q10", marks: 6 },
    { year: "2016", section: "A1", question: "Q8", marks: 5 },
    { year: "2017", section: "A1", question: "Q8", marks: 5 }
  ],
  "Polynomial": [
    { year: "2012(s)", section: "A2", question: "Q10a,bi", marks: 4 },
    { year: "2012 PP", section: "A2", question: "Q10", marks: 6 },
    { year: "2012", section: "A2", question: "Q13a", marks: 2 },
    { year: "2013", section: "A2", question: "Q12a", marks: 4 },
    { year: "2014", section: "A1", question: "Q7a", marks: 5 },
    { year: "2015", section: "A2", question: "Q11a", marks: 3 },
    { year: "2016", section: "A2", question: "Q14a", marks: 5 },
    { year: "2017", section: "A2", question: "Q14", marks: 8 }
  ],
  "Graph and Function": [
    { year: "2012", section: "A2", question: "Q13b", marks: 5 },
    { year: "2016", section: "B", question: "Q18b,c", marks: 4 }
  ],
  "Locus": [
    { year: "2012(s)", section: "A2", question: "Q13b", marks: 6 },
    { year: "2012 PP", section: "A1", question: "Q8", marks: 5 },
    { year: "2013", section: "A2", question: "Q14a", marks: 5 },
    { year: "2015", section: "A2", question: "Q12", marks: 7 },
    { year: "2016", section: "A2", question: "Q10", marks: 5 },
    { year: "2017", section: "A2", question: "Q13c", marks: 3 }
  ],
  "Equation of Circle": [
    { year: "2012(s)", section: "B", question: "Q19", marks: 13 },
    { year: "2012 PP", section: "A2", question: "Q14b", marks: 7 },
    { year: "2012", section: "A2", question: "Q14bi", marks: 4 },
    { year: "2012", section: "B", question: "Q17", marks: 7 },
    { year: "2013", section: "A2", question: "Q14", marks: 9 },
    { year: "2016", section: "A2", question: "Q14aii", marks: 6 },
    { year: "2017", section: "A2", question: "Q13ab", marks: 4 }
  ],
  "Equation of St. Line": [
    { year: "2012(s)", section: "A1", question: "Q8", marks: 5 },
    { year: "2012(s)", section: "A2", question: "Q13a", marks: 3 },
    { year: "2015", section: "A1", question: "Q8b", marks: 3 },
    { year: "2016", section: "A2", question: "Q14a", marks: 3 }
  ],
  "Probability": [
    { year: "2012(s)", section: "B", question: "Q16", marks: 5 },
    { year: "2012 PP", section: "A2", question: "Q13a", marks: 3 },
    { year: "2012 PP", section: "B", question: "Q16", marks: 4 },
    { year: "2012", section: "B", question: "Q16", marks: 4 },
    { year: "2013", section: "A2", question: "Q10b", marks: 4 },
    { year: "2013", section: "B", question: "Q16", marks: 4 },
    { year: "2014", section: "B", question: "Q19", marks: 13 },
    { year: "2015", section: "A1", question: "Q3", marks: 3 },
    { year: "2015", section: "B", question: "Q16", marks: 4 },
    { year: "2016", section: "B", question: "Q15", marks: 3 },
    { year: "2017", section: "A1", question: "Q7a", marks: 2 },
    { year: "2017", section: "A2", question: "Q11b", marks: 2 }
  ],
  "3D Geometry": [
    { year: "2012(s)", section: "B", question: "Q18", marks: 8 },
    { year: "2012 PP", section: "B", question: "Q18", marks: 8 },
    { year: "2012", section: "B", question: "Q18", marks: 8 },
    { year: "2013", section: "A2", question: "Q12b", marks: 3 },
    { year: "2013", section: "B", question: "Q18", marks: 8 },
    { year: "2014", section: "B", question: "Q17", marks: 7 },
    { year: "2015", section: "B", question: "Q19", marks: 13 },
    { year: "2016", section: "B", question: "Q19", marks: 6 }
  ],
  "Quadratic Equation": [
    { year: "2012(s)", section: "A2", question: "Q10bii", marks: 2 },
    { year: "2012", section: "B", question: "Q17b", marks: 5 },
    { year: "2014", section: "B", question: "Q17", marks: 6 },
    { year: "2015", section: "A2", question: "Q11b", marks: 3 },
    { year: "2016", section: "B", question: "Q18", marks: 9 },
    { year: "2017", section: "A2", question: "Q14b", marks: 5 },
    { year: "2017", section: "B", question: "Q18a", marks: 2 }
  ],
  "Quadratic Inequality": [
    { year: "2015", section: "B", question: "Q16", marks: 2 }
  ],
  "Log": [
    { year: "2012(s)", section: "B", question: "Q17", marks: 5 },
    { year: "2015", section: "B", question: "Q15", marks: 3 }
  ],
  "AS GS": [
    { year: "2012(s)", section: "B", question: "Q15", marks: 4 },
    { year: "2015", section: "B", question: "Q16", marks: 2 },
    { year: "2016", section: "B", question: "Q17a", marks: 2 },
    { year: "2017", section: "B", question: "Q17", marks: 5 }
  ],
  "Linear Programming": [
    { year: "2015", section: "B", question: "Q18", marks: 4 },
    { year: "2016", section: "B", question: "Q17b", marks: 3 }
  ],
  "Complex Number": [
    { year: "2012", section: "B", question: "Q17a", marks: 2 }
  ],
  "Unknowns Topic": [
    { year: "2012(s)", section: "A2", question: "Q12", marks: 7 },
    { year: "2012 PP", section: "A2", question: "Q12", marks: 7 }
  ]
};
