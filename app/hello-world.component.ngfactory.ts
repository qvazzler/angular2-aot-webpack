/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/debug_context';
import * as import1 from './hello-world.component';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
const nodeDebugInfos_HelloWorldComponent_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([import1.HelloWorldComponent],import1.HelloWorldComponent,{})];
var renderType_HelloWorldComponent_Host:import2.RenderComponentType = (null as any);
class _View_HelloWorldComponent_Host0 extends import3.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _HelloWorldComponent_0_4:import1.HelloWorldComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_HelloWorldComponent_Host0,renderType_HelloWorldComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HelloWorldComponent_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.selectOrCreateHostElement('hello-world-app',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HelloWorldComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HelloWorldComponent_0_4 = new import1.HelloWorldComponent();
    this._appEl_0.initComponent(this._HelloWorldComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._HelloWorldComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.HelloWorldComponent) && (0 === requestNodeIndex))) { return this._HelloWorldComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_HelloWorldComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  if ((renderType_HelloWorldComponent_Host === (null as any))) { (renderType_HelloWorldComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_HelloWorldComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const HelloWorldComponentNgFactory:import10.ComponentFactory<import1.HelloWorldComponent> = new import10.ComponentFactory<import1.HelloWorldComponent>('hello-world-app',viewFactory_HelloWorldComponent_Host0,import1.HelloWorldComponent);
const styles_HelloWorldComponent:any[] = ([] as any[]);
const nodeDebugInfos_HelloWorldComponent0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import0.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import0.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_HelloWorldComponent:import2.RenderComponentType = (null as any);
class _View_HelloWorldComponent0 extends import3.DebugAppView<import1.HelloWorldComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_HelloWorldComponent0,renderType_HelloWorldComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HelloWorldComponent0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'h1',this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'Hello World!!!',this.debug(1,0,4));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',this.debug(2,0,23));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._text_2
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
}
export function viewFactory_HelloWorldComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<import1.HelloWorldComponent> {
  if ((renderType_HelloWorldComponent === (null as any))) { (renderType_HelloWorldComponent = viewUtils.createRenderComponentType('C:/Users/bernting/Source/Repos/angular2-aot-webpack/app/hello-world.template.html',0,import9.ViewEncapsulation.None,styles_HelloWorldComponent,{})); }
  return new _View_HelloWorldComponent0(viewUtils,parentInjector,declarationEl);
}