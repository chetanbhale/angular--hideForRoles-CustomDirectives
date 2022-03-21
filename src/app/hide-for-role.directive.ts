import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideForRole]',
})
export class HideForRoleDirective {
  constructor(
    private viewContainerref: ViewContainerRef,
    private temref: TemplateRef<any>
  ) {}

  @Input() Set(hideforRole: Array<string>) {
    const hideRoles = hideforRole || [];
    if (hideRoles.length > 0) {
      this.roleChecker(hideRoles);
    } else {
      this.viewContainerref.createEmbeddedView(this.temref);
    }
  }

  roleChecker(hideforRole: Array<string>) {
    const userRole: Array<string> = ['Admin', 'Exicative'];
    if (userRole.length === 0) {
      this.viewContainerref.clear();
    } else {
      const useIndex = userRole.findIndex(
        (role) => hideforRole.indexOf(role) !== -1
      );
      return useIndex < 0
        ? this.viewContainerref.createEmbeddedView(this.temref)
        : this.viewContainerref.clear();
    }
  }
}
