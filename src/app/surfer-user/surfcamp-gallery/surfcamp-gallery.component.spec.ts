import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

import { SurfcampGalleryComponent } from './surfcamp-gallery.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('SurfcampGalleryComponent', () => {
    let component: SurfcampGalleryComponent;
    let fixture: ComponentFixture<SurfcampGalleryComponent>;

    let activatedRoute: ActivatedRoute;
    const mockRoute = {
        snapshot: {
            paramMap: { get: jasmine.createSpy('get') },
        },
    };
    mockRoute.snapshot.paramMap.get.and.returnValue('6230dedcb4bb4b716a3d1167');

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SurfcampGalleryComponent],
            imports: [HttpClientTestingModule],
            providers: [
                provideMockStore({ initialState }),
                { provide: ActivatedRoute, useValue: mockRoute },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SurfcampGalleryComponent);
        activatedRoute = TestBed.inject(ActivatedRoute);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
