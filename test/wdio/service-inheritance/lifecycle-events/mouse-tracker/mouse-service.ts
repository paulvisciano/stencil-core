// A base "mouse service" implemented via class inheritance.
// Attaches a window mousemove listener and updates state on the host component.

export class MouseController {
  __onMove = (ev: MouseEvent) => {
    const host = this as any;
    host.mouseX = ev.clientX;
    host.mouseY = ev.clientY;
    host.moves = [...(host.moves ?? []), `${ev.clientX},${ev.clientY}`];
  };

  connectedCallback(this: any) {
    window.addEventListener('mousemove', this.__onMove);
  }

  disconnectedCallback(this: any) {
    window.removeEventListener('mousemove', this.__onMove);
  }
}
