import json

f = open("/opt/lampp/htdocs/home/pagezero/datac.json", "r")
json_text = f.read()
f.close()

json_test = json.loads(json_text)

arrays = {}

for test in json_test:
    # print(test)
    for cat in json_test[test]:
        temp_array = {}
        
        temp_array["title"] = cat
        temp_array["link"] = "https://"+json_test[test][cat]
        temp_array["tags"] = [test] 
        temp_array["rank"] = 100000
        arrays[cat] = temp_array
        # print(temp_array)


print(arrays)