import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GestionLaboraoitreSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [GestionLaboraoitreSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [GestionLaboraoitreSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestionLaboraoitreSharedModule {
  static forRoot() {
    return {
      ngModule: GestionLaboraoitreSharedModule
    };
  }
}
