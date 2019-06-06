import pandas as pd
import numpy as np

dummy=pd.read_csv('dummy.csv')

zipcode=92109

# zip_data=dummy.loc[dummy["zipcode"]==zipcode]
# print(zipcode)
# print(zip_data)
# return(jsonify(list(zip_data)))

zip_data=dummy.loc[dummy["zipcode"]==zipcode]
print(zip_data)
# zip_dict=zip_data.to_dict("records")
# return(jsonify(zip_dict))