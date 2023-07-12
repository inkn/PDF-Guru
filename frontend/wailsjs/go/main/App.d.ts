// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {main} from '../models';

export function AddPDFBackgroundByColor(arg1:string,arg2:string,arg3:string,arg4:number,arg5:number,arg6:number,arg7:number,arg8:string):Promise<void>;

export function AddPDFBackgroundByImage(arg1:string,arg2:string,arg3:string,arg4:number,arg5:number,arg6:number,arg7:number,arg8:number,arg9:string):Promise<void>;

export function AddPDFHeaderAndFooter(arg1:string,arg2:string,arg3:string,arg4:string,arg5:string,arg6:string,arg7:string,arg8:string,arg9:Array<number>,arg10:string,arg11:string,arg12:number,arg13:string,arg14:number,arg15:string):Promise<void>;

export function AddPDFPageNumber(arg1:string,arg2:string,arg3:string,arg4:number,arg5:string,arg6:Array<number>,arg7:string,arg8:string,arg9:string,arg10:number,arg11:string,arg12:number,arg13:string):Promise<void>;

export function CheckFileExists(arg1:string):Promise<void>;

export function CheckOutputDirExists(arg1:string):Promise<void>;

export function CheckOutputFileExists(arg1:string):Promise<void>;

export function CheckRangeFormat(arg1:string):Promise<void>;

export function CombinePDFByGrid(arg1:string,arg2:string,arg3:number,arg4:number,arg5:string,arg6:string,arg7:string):Promise<void>;

export function CompressPDF(arg1:string,arg2:string):Promise<void>;

export function ConvertDocx2Md(arg1:string,arg2:string):Promise<void>;

export function ConvertHtml2Md(arg1:string,arg2:string):Promise<void>;

export function ConvertMd2Docx(arg1:string,arg2:string):Promise<void>;

export function ConvertMd2Html(arg1:string,arg2:string):Promise<void>;

export function ConvertMd2PDF(arg1:string,arg2:string):Promise<void>;

export function ConvertMd2RevealJs(arg1:string,arg2:string):Promise<void>;

export function ConvertMd2Tex(arg1:string,arg2:string):Promise<void>;

export function ConvertPDF(arg1:string,arg2:string,arg3:string,arg4:string):Promise<void>;

export function ConvertPDF2Docx(arg1:string,arg2:string):Promise<void>;

export function ConvertTex2Md(arg1:string,arg2:string):Promise<void>;

export function CropPDFByBBOX(arg1:string,arg2:string,arg3:Array<number>,arg4:string,arg5:boolean,arg6:string):Promise<void>;

export function CropPDFByMargin(arg1:string,arg2:string,arg3:Array<number>,arg4:string,arg5:boolean,arg6:string):Promise<void>;

export function CutPDFByBreakpoints(arg1:string,arg2:string,arg3:Array<number>,arg4:Array<number>,arg5:string):Promise<void>;

export function CutPDFByGrid(arg1:string,arg2:string,arg3:number,arg4:number,arg5:string):Promise<void>;

export function DecryptPDF(arg1:string,arg2:string,arg3:string):Promise<void>;

export function DeletePDF(arg1:string,arg2:string,arg3:string):Promise<void>;

export function DetectWatermarkByIndex(arg1:string,arg2:string,arg3:number):Promise<void>;

export function EncryptPDF(arg1:string,arg2:string,arg3:string,arg4:string,arg5:Array<string>):Promise<void>;

export function ExtractBookmark(arg1:string,arg2:string,arg3:string):Promise<void>;

export function ExtractImageFromPDF(arg1:string,arg2:string,arg3:string):Promise<void>;

export function ExtractTextFromPDF(arg1:string,arg2:string,arg3:string):Promise<void>;

export function InsertBlankPDF(arg1:string,arg2:string,arg3:number,arg4:string,arg5:string,arg6:string,arg7:number):Promise<void>;

export function InsertPDF(arg1:string,arg2:string,arg3:number,arg4:string,arg5:string,arg6:string):Promise<void>;

export function LoadConfig():Promise<main.MyConfig>;

export function MakeDualLayerPDF(arg1:string,arg2:string,arg3:number,arg4:string,arg5:string):Promise<void>;

export function MaskPDFByAnnot(arg1:string,arg2:string,arg3:number,arg4:string,arg5:number,arg6:number,arg7:string):Promise<void>;

export function MaskPDFByRect(arg1:string,arg2:string,arg3:Array<number>,arg4:string,arg5:string,arg6:number,arg7:number,arg8:string):Promise<void>;

export function MergePDF(arg1:Array<string>,arg2:string,arg3:string,arg4:string):Promise<void>;

export function OCR(arg1:string,arg2:string,arg3:string,arg4:string,arg5:boolean):Promise<void>;

export function OCRExtract(arg1:string,arg2:string,arg3:string,arg4:string):Promise<void>;

export function OCRPDFBookmark(arg1:string,arg2:string,arg3:string,arg4:string,arg5:boolean):Promise<void>;

export function PDFConversion(arg1:string,arg2:string,arg3:number,arg4:boolean,arg5:string,arg6:string,arg7:string,arg8:string):Promise<void>;

export function RemovePDFHeaderAndFooter(arg1:string,arg2:string,arg3:Array<number>,arg4:Array<string>,arg5:string,arg6:string):Promise<void>;

export function RemovePDFPageNumber(arg1:string,arg2:string,arg3:Array<number>,arg4:string,arg5:string,arg6:string):Promise<void>;

export function RemoveWatermarkByIndex(arg1:string,arg2:string,arg3:Array<number>,arg4:string):Promise<void>;

export function RemoveWatermarkByType(arg1:string,arg2:string,arg3:string):Promise<void>;

export function ReorderPDF(arg1:string,arg2:string,arg3:string):Promise<void>;

export function ReplacePDF(arg1:string,arg2:string,arg3:string,arg4:string,arg5:string):Promise<void>;

export function RotatePDF(arg1:string,arg2:string,arg3:number,arg4:string):Promise<void>;

export function SaveConfig(arg1:string,arg2:string,arg3:string,arg4:string):Promise<void>;

export function ScalePDFByDim(arg1:string,arg2:string,arg3:number,arg4:number,arg5:string,arg6:string):Promise<void>;

export function ScalePDFByPaperSize(arg1:string,arg2:string,arg3:string,arg4:string):Promise<void>;

export function ScalePDFByScale(arg1:string,arg2:string,arg3:number,arg4:string):Promise<void>;

export function SplitPDFByBookmark(arg1:string,arg2:string,arg3:string):Promise<void>;

export function SplitPDFByChunk(arg1:string,arg2:number,arg3:string):Promise<void>;

export function SplitPDFByPage(arg1:string,arg2:string,arg3:string):Promise<void>;

export function TransformBookmark(arg1:string,arg2:string,arg3:number,arg4:Array<string>,arg5:number,arg6:number,arg7:boolean):Promise<void>;

export function WatermarkPDFByImage(arg1:string,arg2:string,arg3:string,arg4:number,arg5:number,arg6:number,arg7:number,arg8:number,arg9:number,arg10:number,arg11:number,arg12:boolean,arg13:string):Promise<void>;

export function WatermarkPDFByPDF(arg1:string,arg2:string,arg3:string,arg4:string):Promise<void>;

export function WatermarkPDFByText(arg1:string,arg2:string,arg3:string,arg4:string,arg5:number,arg6:string,arg7:number,arg8:number,arg9:number,arg10:number,arg11:number,arg12:number,arg13:number,arg14:boolean,arg15:string):Promise<void>;

export function WriteBookmarkByFile(arg1:string,arg2:string,arg3:string,arg4:number):Promise<void>;

export function WriteBookmarkByGap(arg1:string,arg2:string,arg3:number,arg4:string):Promise<void>;
