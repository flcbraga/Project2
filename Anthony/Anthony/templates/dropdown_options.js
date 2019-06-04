var dropdown_options = [
    {
        value: "empl13",
        text: "Percent Population 16-64 Employed: 2008-2013"
    },
    {
        value: "unempl13",
        text: "Percent Population 16-64 Unemployed and Looking for Work: 2008-2013"
    },
    {
        value: "nilf13",
        text: "Percent Population 16-64 Not in Labor Force: 2008-2013"
    },
    {
        value: "unempr13",
        text: "Unemployment Rate: 2008-2013"
    },
    {
        value: "lesshs13",
        text: "Percent Population (25 years and over) With Less Than a High School Diploma or GED: 2008-2013"
    },
    {
        value: "hsdipl13",
        text: "Percent Population (25 years and over) With High School Diploma: 2008-2013"
    },
    {
        value: "somecol13",
        text: "Percent Population (25 years and over) with Some College or Bachelor's Degree or Higher: 2008-2013"
    },
    {
        value: "numbus10",
        text: "Total Number of Businesses: 2010"
    },
    {
        value: "numbus11",
        text: "Total Number of Businesses: 2011"
    },
    {
        value: "numbus12",
        text: "Total Number of Businesses: 2012"
    },
    {
        value: "numbus13",
        text: "Total Number of Businesses: 2013"
    },
    {
        value: "biz1_10",
        text: "Percent of Businesses that are 1 year old or less: 2010"
    },
    {
        value: "biz1_11",
        text: "Percent of Businesses that are 1 year old or less: 2011"
    },
    {
        value: "biz1_12",
        text: "Percent of Businesses that are 1 year old or less: 2012"
    },
    {
        value: "biz1_13",
        text: "Percent of Businesses that are 1 year old or less: 2013"
    },
    {
        value: "biz2_10",
        text: "Percent of Businesses that are 2 years old or less: 2010"
    },
    {
        value: "biz2_11",
        text: "Percent of Businesses that are 2 years old or less: 2011"
    },
    {
        value: "biz2_12",
        text: "Percent of Businesses that are 2 years old or less: 2012"
    },
    {
        value: "biz2_13",
        text: "Percent of Businesses that are 2 years old or less: 2013"
    },
    {
        value: "biz4_10",
        text: "Percent of Businesses that are 4 years old or less: 2010"
    },
    {
        value: "biz4_11",
        text: "Percent of Businesses that are 4 years old or less: 2011"
    },
    {
        value: "biz4_12",
        text: "Percent of Businesses that are 4 years old or less: 2012"
    },
    {
        value: "biz4_13",
        text: "Percent of Businesses that are 4 years old or less: 2013"
    },
    {
        value: "smlbus10",
        text: "Number of Businesses with Under 50 Employees: 2010"
    },
    {
        value: "smlbus11",
        text: "Number of Businesses with Under 50 Employees: 2011"
    },
    {
        value: "smlbus12",
        text: "Number of Businesses with Under 50 Employees: 2012"
    },
    {
        value: "smlbus13",
        text: "Number of Businesses with Under 50 Employees: 2013"
    },
    {
        value: "totemp10",
        text: "Total Number of Employees: 2010"
    },
    {
        value: "totemp11",
        text: "Total Number of Employees: 2011"
    },
    {
        value: "totemp12",
        text: "Total Number of Employees: 2012"
    },
    {
        value: "totemp13",
        text: "Total Number of Employees: 2013"
    },
    {
        value: "wrkout10",
        text: "Percent of the Population that Work Outside of the City: 2010"
    },
    {
        value: "wrkout11",
        text: "Percent of the Population that Work Outside of the City: 2011"
    },
    {
        value: "banks11",
        text: "Number of Banks and Bank Branches per 1,000 Residents: 2011"
    },
    {
        value: "banks12",
        text: "Number of Banks and Bank Branches per 1,000 Residents: 2012"
    },
    {
        value: "banks13",
        text: "Number of Banks and Bank Branches per 1,000 Residents: 2013"
    },
    {
        value: "comprop10",
        text: "Total Number of Commercial Properties: 2010"
    },
    {
        value: "comprop11",
        text: "Total Number of Commercial Properties: 2011"
    },
    {
        value: "comprop12",
        text: "Total Number of Commercial Properties: 2012"
    },
    {
        value: "comprop13",
        text: "Total Number of Commercial Properties: 2013"
    },
    {
        value: "crehab10",
        text: "Percent of Commercial Properties with Rehab Permits Above $5,000: 2010"
    },
    {
        value: "crehab11",
        text: "Percent of Commercial Properties with Rehab Permits Above $5,000: 2011"
    },
    {
        value: "crehab12",
        text: "Percent of Commercial Properties with Rehab Permits Above $5,000: 2012"
    },
    {
        value: "neibus10",
        text: "Neighborhood Businesses per 1,000 residents (NAICS Sectors): 2010"
    },
    {
        value: "neibus11",
        text: "Neighborhood Businesses per 1,000 residents (NAICS Sectors): 2011"
    },
    {
        value: "neibus12",
        text: "Neighborhood Businesses per 1,000 residents (NAICS Sectors): 2012"
    },
    {
        value: "neibus13",
        text: "Neighborhood Businesses per 1,000 residents (NAICS Sectors): 2013"
    },
    {
        value: "neiemp10",
        text: "Total number of Employees by Selected Neighborhood Industry (NAICS Sectors): 2010"
    },
    {
        value: "neiemp11",
        text: "Total number of Employees by Selected Neighborhood Industry (NAICS Sectors): 2011"
    },
    {
        value: "neiemp12",
        text: "Total number of Employees by Selected Neighborhood Industry (NAICS Sectors): 2012"
    },
    {
        value: "neiemp13",
        text: "Total number of Employees by Selected Neighborhood Industry (NAICS Sectors): 2013"
    },
    {
        value: "neiind10",
        text: "Number of Businesses by Selected Neighborhood Industry (NAICS Sectors): 2010"
    },
    {
        value: "neiind11",
        text: "Number of Businesses by Selected Neighborhood Industry (NAICS Sectors): 2011"
    },
    {
        value: "neiind12",
        text: "Number of Businesses by Selected Neighborhood Industry (NAICS Sectors): 2012"
    },
    {
        value: "neiind13",
        text: "Number of Businesses by Selected Neighborhood Industry (NAICS Sectors): 2013"
    }]