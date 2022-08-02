import sys
data=open("data.txt").read()
sys.stdout=open("output.txt",'w')
print('[')
for v in data.split(';'):
    cnt=0
    i=0
    tmp=''
    v=v.strip('\n')
    v+=','
    while i<len(v):
        if v[i]==',':
            if cnt==0:
                print('"{"name":"'+tmp+'"',end=',')
            elif cnt==1:
                print('"ed":'+tmp,end=',')
            elif cnt==2:
                print('"rd":'+tmp,end=',')
            elif cnt==3:
                print('"edp":'+tmp,end=',')
            elif cnt==4:
                print('"edtord":'+tmp,end=',')
            elif cnt==5:
                print('"aap:"'+tmp+'"',end=',')
            elif cnt==6:
                print('"coa":'+tmp,end=',')
            elif cnt==7:
                print('"ftug":'+tmp,end=',')
            elif cnt==8:
                print('"ftinc":'+tmp,end=',')
            elif cnt==9:
                print('"pinc":'+tmp,end=',')
            elif cnt==10:
                print('"nb":'+tmp,end=',')
            elif cnt==11:
                print('"mrt":'+tmp,end=',')
            elif cnt==12:
                print('"na":'+tmp,end=',')
            elif cnt==13:
                print('"afa":'+tmp,end=',')
            elif cnt==14:
                print('"pinca":'+tmp,end=',')
            else:
                print('"efc":'+tmp,end='},\n')
            tmp=''
            cnt+=1
        elif v[i]=='"':
            for j in range(i+1, len(v)):
                if v[j]=='"':
                    break
                tmp+=v[j]
            i=j
        else:
            tmp+=v[i]
        i+=1
print(']')