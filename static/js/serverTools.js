function getData(){
        alert(1);
        if (cpp_object != null){
            alert(0);
            cpp_object.ShowMessageBox("你好，我是Javascript，你是谁？");
        }
    }
    function GetProcessID()
    {
        if (cpp_object != null)
        {
            var id = cpp_object.GetProcessID();
            // document.getElementById("process_info").innerText = "本进程ID为：" + id;
        }
    }
    function SaveCppObject(obj)
    {
        cpp_object = obj;
    }
var cpp_object;


