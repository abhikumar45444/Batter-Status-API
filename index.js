let btryLevel = document.querySelector("#b-level");
let chrging = document.querySelector("#charging");
let chrgTime = document.querySelector("#charging-time");
let dischrgTime = document.querySelector("#discharging-time");

const battery = async () => {
    
    if("getBattery" in navigator)
    {
        navigator.getBattery().then((battery)=>{
            
            function updateBatteryInfo(){
                updatebatteryLevel();
                updatechargingChange();
                updatechargingTime();
                updatedischargingTime();
            }

            updateBatteryInfo();
            
            battery.addEventListener("chargingchange", ()=>{
                updatechargingChange();
            })
            
            function updatechargingChange(){
                let isCharging = battery.charging ? "Yes":"No";
                chrging.textContent = isCharging;
                
            }

            battery.addEventListener("chargingtimechange", ()=>{
                updatechargingTime();
            })
            
            function updatechargingTime(){
                chrgTime.textContent = battery.chargingTime + " seconds";
            }

            battery.addEventListener("levelchanging", ()=>{
                updatebatteryLevel();
            })
            
            function updatebatteryLevel(){
                let level = battery.level * 100 + "%";
                btryLevel.textContent = level;
            }

            battery.addEventListener("dischargingtimechange", ()=>{
                updatedischargingTime();
            })
            
            function updatedischargingTime(){
                let currdischargeTime = battery.dischargeTime === undefined? "Infinity":battery.dischargeTime;
                dischrgTime.textContent = currdischargeTime + " seconds";
            }
        })
    }
}

battery();

