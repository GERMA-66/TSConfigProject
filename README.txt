
1.修改项目名字后，一定要修改配置文件(TSConfigEditor文件夹下的settingConfig.xml文件中的项目名字)

2.导入表数据设置，在TSConfigEditor文件夹下的settingConfig.xml文件中加入配置文件的名字即可(按照之前的格式增加就行)

3.执行TSConfigEditor文件夹下的TSConfigEditor.exe文件

4.若表数据过多可能会出现程序未响应的情况，请耐心等待(当超过10分钟时，强制结束进程，重新打开)

4.若是想重新发布某个文件需要删除之前的文件(不需要删除.txt文件，只需删除两个.ts文件即可)

5.需要在egretProperties.json引入第三方库(game_config)，同时需要执行egret build -e

6.需要把.txt文件添加到default.res.json文件中
