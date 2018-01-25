import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home'
import ItemInfo from '@/components/pages/itemInfo'
import UserInfo from '@/components/pages/userInfo'
import DataIn from '@/components/pages/dataIn.vue'
import WinBidding from '@/components/pages/dataIn/winBidding'
import BQItem from '@/components/pages/dataIn/BQItem'
import Composite from '@/components/pages/dataIn/composite'
import ModifyIn from '@/components/pages/dataIn/modifyIn'
import TeamsMeg from '@/components/pages/dataIn/teamsMeg'
import ClassMegIn from '@/components/pages/dataIn/classMegIn'
import FarmOutIn from '@/components/pages/dataIn/farmOutIn'
import ClassPackIn from '@/components/pages/dataIn/classPackIn'
import MixedMaterial from '@/components/pages/dataIn/MixedMaterial'
import StartRecord  from '@/components/pages/dataIn/startRecord'
import BigEvent from '@/components/pages/dataIn/bigEvent'
import ItemPlan from '@/components/pages/itemPlan.vue'
import OwnerPlan from '@/components/pages/itemPlan/ownerPlan'
import HeadPlan from '@/components/pages/itemPlan/headPlan'
import ProjectPlan from '@/components/pages/itemPlan/projectPlan'
import ProcessPlan from '@/components/pages/itemPlan/processPlan'
import TimePlan from '@/components/pages/itemPlan/timePlan'
import MaterialPlan from '@/components/pages/itemPlan/materialPlan'
import PackManage from '@/components/pages/packManage.vue'
import UserManage from '@/components/pages/packManage/userManage'
import TeamsPlan from '@/components/pages/packManage/teamsPlan'
import StartWorkRecord from '@/components/pages/packManage/startWorkRecord'
import GetMaterial from '@/components/pages/packManage/getMaterial'
import SubContractorChange from '@/components/pages/packManage/subContractorChange'
import AccountPack from '@/components/pages/packManage/accountPack'
import AddTaxManage from '@/components/pages/packManage/addTaxManage'
import ProcessCount from '@/components/pages/processCount'
import Modify from '@/components/pages/modify'
import MsgManage from '@/components/pages/msgManage'
import DataSheet from '@/components/pages/dataSheet'
import PayMent from '@/components/pages/dataSheet/payment'
import ModularNum from '@/components/pages/dataSheet/modularNum'
import Meterials from '@/components/pages/dataSheet/meterials'
import Quantities from '@/components/pages/dataSheet/quantities'
import TeamsRank from '@/components/pages/dataSheet/teamsRank'
import TeamsOutPut from '@/components/pages/dataSheet/teamsOutPut'
import Planof from '@/components/pages/dataSheet/planof'
import Completeof from '@/components/pages/dataSheet/completeof'
import ComporeChart from '@/components/pages/dataSheet/comporeChart'
import Fabric from '@/components/pages/dataSheet/fabric'
import OutputPec from '@/components/pages/dataSheet/outputPec'
import NodeIntervalChar from '@/components/pages/dataSheet/nodeIntervalChar'
import ProcessBarChart from '@/components/pages/dataSheet/processBarChart'
import Calculate from '@/components/pages/calculate'
import Bills from '@/components/pages/calculate/bills'
import OwnerCalculate from '@/components/pages/calculate/ownerCalculate'
import Materials from '@/components/pages/materials'
import Supplier from '@/components/pages/materials/supplier'
import MaterialsMsg from '@/components/pages/materials/materialsMsg'

//安全
import Safety from '@/components/pages/safety'
import SafetyData from '@/components/pages/safety/safetyData'
import SafetyContracts from '@/components/pages/safety/safetyContracts'
import Assess from '@/components/pages/safety/assess'
import EmergencyPlan from '@/components/pages/safety/emergencyPlan'
import SafetyGear from '@/components/pages/safety/safetyGear'
import SafetyDisclosure from '@/components/pages/safety/safetyDisclosure'
import LearningRegistry from '@/components/pages/safety/learningRegistry'
import SafetyPractice from '@/components/pages/safety/safetyPractice'
import SpecialJob from '@/components/pages/safety/specialJob'
import SafetyCheckList from '@/components/pages/safety/safetyCheckList'
import SafetySubcontractor from '@/components/pages/safety/safetySubcontractor'
import TheLaborSecurity from '@/components/pages/safety/theLaborSecurity'
import SiteSafety from '@/components/pages/safety/siteSafety'
import SetKey from '@/components/pages/safety/setKey'
import Video from '@/components/pages/safety/video'
import Fence from '@/components/pages/safety/fence'
import DailyCheck from '@/components/pages/safety/dailyCheck'
import WinterTour from '@/components/pages/safety/winterTour'
import SelfChecking from '@/components/pages/safety/selfChecking'
import StartChecking from '@/components/pages/safety/startChecking'
import DownChecking from '@/components/pages/safety/downChecking'
import ReturnChecking from '@/components/pages/safety/returnChecking'
import TeamSafety from '@/components/pages/safety/teamSafety'
import ConcealedWork from '@/components/pages/safety/concealedWork'
import CosmeticInspect from '@/components/pages/safety/cosmeticInspect'
import SafeSummary from '@/components/pages/safety/safeSummary'
import Rectification from '@/components/pages/safety/rectification'
import Solve from '@/components/pages/safety/solve'
import AccidentSurvey from '@/components/pages/safety/accidentSurvey'
import AccidentStatistics from '@/components/pages/safety/accidentStatistics'
//质量
import Quality from '@/components/pages/quality'
import QualityTrain from '@/components/pages/quality/qualityTrain'
import QualityAssess from '@/components/pages/quality/qualityAssess'
import AssessSystem from '@/components/pages/quality/assessSystem'
import QualityPlan from '@/components/pages/quality/qualityPlan'
import QualityTissue from '@/components/pages/quality/qualityTissue'
import QualityExplanation from '@/components/pages/quality/qualityExplanation'
import Policy from '@/components/pages/quality/policy'
import Objective from '@/components/pages/quality/objective'
import Testing from '@/components/pages/quality/testing'
import HiddenTrouble from '@/components/pages/quality/hiddenTrouble'
import LabourService from '@/components/pages/quality/labourService'
import Scene from '@/components/pages/quality/scene'
import CriticalPoint from '@/components/pages/quality/criticalPoint'
import StartPreparation from '@/components/pages/quality/startPreparation'
import DivisionToPrepare from '@/components/pages/quality/divisionToPrepare'
import MonsoonSetout from '@/components/pages/quality/monsoonSetout'
import RoutineInspection from '@/components/pages/quality/routineInspection'
import MonsoonInspect from '@/components/pages/quality/monsoonInspect'
import SelfInspection from '@/components/pages/quality/selfInspection'
import RawMaterial from '@/components/pages/quality/rawMaterial'
import SemiFinishedProduct from '@/components/pages/quality/semiFinishedProduct'
import FinalGoods from '@/components/pages/quality/finalGoods'
import SignOff from '@/components/pages/quality/signOff'
import ConcealedWorks from '@/components/pages/quality/concealedWorks'
import BetonRoadWork from '@/components/pages/quality/betonRoadWork'
import ShutdownInspection from '@/components/pages/quality/shutdownInspection'
import ReturnWorkCheck from '@/components/pages/quality/returnWorkCheck'
import ShiftHandover from '@/components/pages/quality/shiftHandover'
import HiddenProject from '@/components/pages/quality/hiddenProject'
import VisualInspection from '@/components/pages/quality/visualInspection'
import TestQuality from '@/components/pages/quality/testQuality'
import SolveTheQuality from '@/components/pages/quality/solveTheQuality'
import QualityProblem from '@/components/pages/quality/qualityProblem'
import QualityAcceptation from '@/components/pages/quality/qualityAcceptation'
//  现场 workField
import WorkField from '@/components/pages/workField'
import ConstructionLog from '@/components/pages/workField/constructionLog'
import SmartDevice from '@/components/pages/workField/smartDevice'
import Supervisor from '@/components/pages/workField/supervisor'
//形象进度
import PlanTrace from '@/components/pages/planTraceManage'
//变更汇总台账             @/components/pages/
import ChangeLedger from '@/components/pages/changeLedger'
import ApproveProject from '@/components/pages/changeLedger/approveProject'
import ChangeDynamic from '@/components/pages/changeLedger/changeDynamic'
import ProjectChange from '@/components/pages/changeLedger/projectChange'
//分包汇总台账                 @/components/pages/
import PackLedgerGather from '@/components/pages/packLedgerGather'
//                             @/components/pages/packLedger/
import PackAccountManage from '@/components/pages/packLedger/packAccountManage'
import PackCompactManage from '@/components/pages/packLedger/packCompactManage'
import PackOutputCom from '@/components/pages/packLedger/packOutputCom'
import PackProjectAccount from '@/components/pages/packLedger/packProjectAccount'
import PackProjectGather from '@/components/pages/packLedger/packProjectGather'
import PackProjectProcess from '@/components/pages/packLedger/packProjectProcess'
import PackTeamAccount from '@/components/pages/packLedger/packTeamAccount'
import PackTeamMaterial from '@/components/pages/packLedger/packTeamMaterial'
import PackTeamOut from '@/components/pages/packLedger/packTeamOut'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/', //可视化进度
            component: Home
        },
        {
            path:'/planTrace',
            component:PlanTrace
        },
        {
            path:'/itemInfo', //项目信息
            name:'ItemInfo',
            component:ItemInfo
        },
        {
            path:'/userInfo',
            name:'UserInfo',
            component:UserInfo
        },
        {
            path:'/dataIn',
            component:DataIn,
            children:[
                {
                    path:'winBidding',
                    component:WinBidding
                },
                {
                    path:'BQItem',
                    component:BQItem

                },
                {
                    path:'composite',
                    component:Composite

                },
                {
                    path:'modifyIn',
                    component:ModifyIn

                },
                {
                    path:'teamsMeg',
                    component:TeamsMeg

                },
                {
                    path:'classMegIn',
                    component:ClassMegIn

                },
                {
                    path:'farmOutIn',
                    component:FarmOutIn

                },
                {
                    path:'classPackIn',
                    component:ClassPackIn

                },
                {
                    path:'MixedMaterial',
                    component:MixedMaterial
                },
                {
                  path:'startRecord',
                  component:StartRecord
                },
                {
                  path:'bigEvent',
                  component:BigEvent
                }
            ],
        },
        {
            path:'/itemPlan',
            component:ItemPlan,
            children:[
                {
                    path:'ownerPlan',
                    component:OwnerPlan
                },
                {
                    path:'headPlan',
                    component:HeadPlan
                },
                {
                    path:'projectPlan',
                    component:ProjectPlan
                },
                {
                    path:'processPlan',
                    component:ProcessPlan
                },
                {
                    path:'timePlan',
                    component:TimePlan
                },
                {
                    path:'materialPlan',
                    component:MaterialPlan
                },
            ]
        },
        {
            path:'/packManage',
            component:PackManage,
            children:[
                {
                    path:'userManage',
                    component:UserManage
                },
                {
                    path:'teamsPlan',
                    component:TeamsPlan
                },
                {
                    path:'startWorkRecord',
                    component:StartWorkRecord
                },
                {
                    path:'getMaterial',
                    component:GetMaterial
                },
                {
                    path:'subContractorChange',
                    component:SubContractorChange
                },
                {
                    path:'accountPack',
                    component:AccountPack
                },
                {
                    path:'addTaxManage',
                    component:AddTaxManage
                }

            ]
        },
        {
            path:'/processCount',
            component:ProcessCount
        },
        {
            path:'/modify',
            component:Modify
        },
        {
            path:'/msgManage',
            component:MsgManage
        },
        {
            path:'/dataSheet',
            component:DataSheet,
            children:[
                {
                    path:'payment',
                    component:PayMent
                },
                {
                    path:'modularNum',
                    component:ModularNum
                },
                {
                    path:'meterials',
                    component:Meterials
                },
                {
                    path:'quantities',
                    component:Quantities
                },
                {
                    path:'teamsRank',
                    component:TeamsRank
                },
                {
                    path:'teamsOutPut',
                    component:TeamsOutPut
                },
                {
                    path:'planof',
                    component:Planof
                },
                {
                    path:'completeof',
                    component:Completeof
                },
                {
                    path:'comporeChart',
                    component:ComporeChart
                },
                {
                    path:'fabric',
                    component:Fabric
                },
                {
                    path:'outputPec',
                    component:OutputPec
                },
                {
                    path:'nodeIntervalChar',
                    component:NodeIntervalChar
                },
                {
                    path:'processBarChart',
                    component:ProcessBarChart
                }
            ]
        },
        {
        path:'/calculate',
        component:Calculate,
        children:[
          {
            path:'bills',
            component:Bills,
          },
          {
            path:'ownerCalculate',
            component:OwnerCalculate,
          },
        ]
      },
        {
        path:'/materials',
        component:Materials,
          children:[
            {
              path:'supplier',
              component:Supplier
            },
            {
              path:'materialsMsg',
              component:MaterialsMsg
            }
          ]
      },
        {
        path:'/safety',
        component:Safety,
          children:[
            {
              path:'safetyData',
              component:SafetyData
            },
            {
              path:'safetyContracts',
              component:SafetyContracts
            },
            {
              path:'assess',
              component:Assess
            },
            {
              path:'emergencyPlan',
              component:EmergencyPlan
            },
            {
              path:'safetyGear',
              component:SafetyGear
            },
            {
              path:'safetyDisclosure',
              component:SafetyDisclosure
            },
            {
              path:'learningRegistry',
              component:LearningRegistry
            },
            {
              path:'safetyPractice',
              component:SafetyPractice
            },
            {
              path:'specialJob',
              component:SpecialJob
            },
            {
              path:'safetyCheckList',
              component:SafetyCheckList
            },
            {
              path:'safetySubcontractor',
              component:SafetySubcontractor
            },
            {
              path:'theLaborSecurity',
              component:TheLaborSecurity
            },
            {
              path:'siteSafety',
              component:SiteSafety
            },
            {
              path:'setKey',
              component:SetKey
            },
            {
              path:'video',
              component:Video
            },
            {
              path:'fence',
              component:Fence
            },
            {
              path:'dailyCheck',
              component:DailyCheck
            },
            {
              path:'winterTour',
              component:WinterTour
            },
            {
              path:'selfChecking',
              component:SelfChecking
            },
            {
              path:'startChecking',
              component:StartChecking
            },
            {
              path:'downChecking',
              component:DownChecking
            },
            {
              path:'returnChecking',
              component:ReturnChecking
            },
            {
              path:'teamSafety',
              component:TeamSafety
            },
            {
              path:'concealedWork',
              component:ConcealedWork
            },
            {
              path:'cosmeticInspect',
              component:CosmeticInspect
            },
            {
              path:'safeSummary',
              component:SafeSummary
            },
            {
              path:'rectification',
              component:Rectification
            },
            {
              path:'solve',
              component:Solve
            },
            {
              path:'accidentSurvey',
              component:AccidentSurvey
            },
            {
              path:'accidentStatistics',
              component:AccidentStatistics
            }
          ]
      },
        {
        path:'/quality',
        component:Quality,
        children:[
          {
            path:'qualityTrain',
            component:QualityTrain
          },
          {
            path:'qualityAssess',
            component:QualityAssess
          },
          {
            path:'assessSystem',
            component:AssessSystem
          },
          {
            path:'qualityPlan',
            component:QualityPlan
          },
          {
            path:'qualityTissue',
            component:QualityTissue
          },
          {
            path:'qualityExplanation',
            component:QualityExplanation
          },
          {
            path:'policy',
            component:Policy
          },
          {
            path:'objective',
            component:Objective
          },
          {
            path:'testing',
            component:Testing
          },
          {
            path:'hiddenTrouble',
            component:HiddenTrouble
          },
          {
            path:'labourService',
            component:LabourService
          },
          {
            path:'scene',
            component:Scene
          },
          {
            path:'criticalPoint',
            component:CriticalPoint
          },
          {
            path:'startPreparation',
            component:StartPreparation
          },
          {
            path:'divisionToPrepare',
            component:DivisionToPrepare
          },
          {
            path:'monsoonSetout',
            component:MonsoonSetout
          },
          {
            path:'routineInspection',
            component:RoutineInspection
          },
          {
            path:'monsoonInspect',
            component:MonsoonInspect
          },
          {
            path:'selfInspection',
            component:SelfInspection
          },
          {
            path:'rawMaterial',
            component:RawMaterial
          },
          {
            path:'semiFinishedProduct',
            component:SemiFinishedProduct
          },
          {
            path:'finalGoods',
            component:FinalGoods
          },
          {
            path:'signOff',
            component:SignOff
          },
          {
            path:'concealedWorks',
            component:ConcealedWorks
          },
          {
            path:'betonRoadWork',
            component:BetonRoadWork
          },
          {
            path:'shutdownInspection',
            component:ShutdownInspection
          },
          {
            path:'returnWorkCheck',
            component:ReturnWorkCheck
          },
          {
            path:'shiftHandover',
            component:ShiftHandover
          },
          {
            path:'hiddenProject',
            component:HiddenProject
          },
          {
            path:'visualInspection',
            component:VisualInspection
          },
          {
            path:'testQuality',
            component:TestQuality
          },
          {
            path:'solveTheQuality',
            component:SolveTheQuality
          },
          {
            path:'qualityProblem',
            component:QualityProblem
          },
          {
            path:'qualityAcceptation',
            component:QualityAcceptation
          },
        ]
      },
        {
        path:'/workField',
        component:WorkField,
        children:[
          {
            path:'constructionLog',
            component:ConstructionLog
          },
          {
            path:'smartDevice',
            component:SmartDevice
          },
          {
            path:'supervisor',
            component:Supervisor
          },
        ]
      },
    //    变更汇总台账
        {
            path:"/changeLedger",
            component:ChangeLedger,
            children:[
                {
                    path:"approveProject",
                    component:ApproveProject
                },
                {
                    path:"changeDynamic",
                    component:ChangeDynamic
                },
                {
                    path:"projectChange",
                    component:ProjectChange
                }
            ]
        },
    //    分包台账汇总
        {
            path:"/packLedger",
            component:PackLedgerGather,
            children:[
                {
                    path:"packAccountManage",
                    component:PackAccountManage
                },
                {
                    path:"packCompactManage",
                    component:PackCompactManage
                },
                {
                    path:"packOutputCom",
                    component:PackOutputCom
                },
                {
                    path:"packProjectAccount",
                    component:PackProjectAccount
                },
                {
                    path:'packProjectGather',
                    component:PackProjectGather
                },
                {
                    path:"packProjectProcess",
                    component:PackProjectProcess
                },
                {
                    path:"packTeamAccount",
                    component:PackTeamAccount
                },
                {
                    path:"packTeamMaterial",
                    component:PackTeamMaterial
                },
                {
                    path:"packTeamOut",
                    component:PackTeamOut
                }
            ]
        }
    ]
})
